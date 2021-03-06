import plaid from 'plaid'
import dotenv from "dotenv"
dotenv.config()

const { PLAID_CLIENT_ID, PLAID_SECRET_SANDBOX, PLAID_SECRET_DEVELOPMENT, PLAID_ENV, ENCRYPTION_KEY } = process.env

const PLAID_SECRET = PLAID_ENV === 'sandbox' ? PLAID_SECRET_SANDBOX : PLAID_SECRET_DEVELOPMENT


const client = new plaid.Client({
    clientID: PLAID_CLIENT_ID,
    secret: PLAID_SECRET,
    env: plaid.environments[PLAID_ENV],
})

export default client