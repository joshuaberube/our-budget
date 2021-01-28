import plaid from "plaid"
import dotenv from "dotenv"
import crypto from "crypto"
import moment from "moment"
dotenv.config()

const { PLAID_CLIENT_ID, PLAID_SECRET, ENCRYPTION_KEY } = process.env

const client = new plaid.Client({
    clientID: PLAID_CLIENT_ID,
    secret: PLAID_SECRET,
    env: plaid.environments.sandbox,
})

const algorithm = "aes-192-cbc"

const encrypt = accessToken => {
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(ENCRYPTION_KEY), iv)
    let encryptedToken = cipher.update(accessToken)

    encryptedToken = Buffer.concat([encryptedToken, cipher.final()])

    return `${iv.toString("hex")}:${encryptedToken.toString("hex")}`
}

const decrypt = apiKey => {
    const apiKeySplit = apiKey.split(':')
    const iv = Buffer.from(apiKeySplit.shift(), 'hex')
    const encryptedText = Buffer.from(apiKeySplit.join(":"), 'hex')

    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(ENCRYPTION_KEY), iv)
    let decrypted = decipher.update(encryptedText)

    decrypted = Buffer.concat([decrypted, decipher.final()])
    return decrypted.toString()
}

const createAccessToken = async (req, res) => {
    try {
        const db = req.app.get('db')
        const { publicToken } = req.body
        const { user_id } = req.session.user

        const { access_token } = await client.exchangePublicToken(publicToken)

        const encryptedKey = encrypt(access_token)
        
        await db.user.add_access_token([user_id, encryptedKey])

        res.status(200).send(true)
    } catch (err) {
        res.sendStatus(500) 
        console.log(err)
    }
}

const getPlaidTransactions = async (req, res) => {
    try {
        const db = req.app.get('db')
        const { user_id } = req.session.user
    
        const [{api_key}] = await db.user.get_access_token(user_id)
        const decrypted = decrypt(api_key)

        const startDate = moment().subtract(60, "days").format("YYYY-MM-DD")
        const endDate = moment().format("YYYY-MM-DD")
        
        const plaidTransactions = await client.getTransactions(decrypted, startDate, endDate)
        const dbTransactions = await db.transactions.where("user_id=$1", [user_id])

        const allTransactions = [...plaidTransactions.transactions, ...dbTransactions]

        const current = plaidTransactions.accounts.slice(0, 4).reduce((acc, curVal) => {
            return acc += curVal.balances.current
        }, 0)

        const allAccounts = {account_id: "all", balances: {current: current}, name: "All Accounts", subtype: "combined"}
        const allAccountsCombined = [allAccounts, ...plaidTransactions.accounts.slice(0, 4)]

        plaidTransactions.transactions = allTransactions
        plaidTransactions.accounts = allAccountsCombined

        res.status(200).send(plaidTransactions)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

const getCategories = async (req, res) => {
    const { categories } = await client.getCategories()
    .catch(err => {console.log(err); res.sendStatus(500)})

    res.status(200).send(categories)
}

export { createPlaidLinkToken, createAccessToken, getPlaidTransactions, getCategories }