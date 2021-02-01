import client from "../middleware/plaidClient"

const createAccessToken = async (req, res) => {
    try {
        const { publicToken } = req.body
        // const { user_id } = req.session.user

        const { access_token } = await client.exchangePublicToken(publicToken)

        // const encryptedKey = encrypt(access_token)
        res.status(200).send(access_token)
    } catch (err) {
        res.status(500).send(err)
        console.log(err)
    }
}

export default createAccessToken