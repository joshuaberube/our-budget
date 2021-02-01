import { useCallback, useEffect, useState } from 'react'
import { usePlaidLink } from "react-plaid-link"
// import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"

const PlaidLink = () => {
    const [token, setToken] = useState("")
    // const dispatch = useDispatch()
    // const isLoggedIn = useSelector(selectIsLoggedIn)
    const isLoggedIn = true

    const onSuccess = useCallback(async publicToken => {
        const {data: accessToken} = await axios.post("/api/plaid/create-access-token", { publicToken })
            .catch(err => console.log(err))

        const transactions = await axios.post('/api/plaid/transactions', {accessToken})
        console.log(transactions.data)
    }, [])

    const onEvent = useCallback(eventName => {
        if (eventName === "HANDOFF") console.log("Awesome")
    }, [])

    const config = { clientName: "Our Budget", token, onSuccess, onEvent }

    const { open, ready, error } = usePlaidLink(config)

    useEffect(() => {
        const createToken = async () => {
            const response = await axios.post("/api/plaid/create-link-token")
                .catch(err => console.log(err))

            setToken(response.data)
        }

        if (isLoggedIn) createToken()
    }, [isLoggedIn])

    return (
        <input 
            type="button" 
            onClick={open} 
            disabled={!ready || error} 
            value="Connect a bank account"
        />
    )
}

export default PlaidLink