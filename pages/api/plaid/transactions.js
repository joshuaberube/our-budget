import moment from 'moment'
import client from "../middleware/plaidClient"

const getPlaidTransactions = async (req, res) => {
    try {
        // const db = req.app.get('db')
        // const { user_id } = req.session.user
        // const user_id = 1
    
        // const [{api_key}] = await db.user.get_access_token(user_id)
        // const decrypted = decrypt(api_key)

        const startDate = moment().subtract(90, "days").format("YYYY-MM-DD")
        const endDate = moment().format("YYYY-MM-DD")
        
        const plaidTransactions = await client.getTransactions(req.body.accessToken, startDate, endDate)
        // const dbTransactions = await db.transactions.where("user_id=$1", [user_id])

        // const allTransactions = [...plaidTransactions.transactions, ...dbTransactions]

        // const current = plaidTransactions.accounts.reduce((acc, curVal) => (
        //     acc += curVal.balances.current
        // ), 0)

        // const allAccounts = {account_id: "all", balances: {current: current}, name: "All Accounts", subtype: "combined"}
        // const allAccountsCombined = [allAccounts, ...plaidTransactions.accounts]

        // plaidTransactions.transactions = allTransactions
        // plaidTransactions.accounts = allAccountsCombined

        res.status(200).send(plaidTransactions)
    } catch (err) {
        res.status(500).send(err)
        console.log(err)
    }
}

export default getPlaidTransactions