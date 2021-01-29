import { useCallback, useEffect, useState } from 'react'
import { usePlaidLink } from "react-plaid-link"
// import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"

const PlaidLink = () => {
    const [token, setToken] = useState("")
    // const dispatch = useDispatch()
    // const isLoggedIn = useSelector(selectIsLoggedIn)
    const isLoggedIn = true

    const onSuccess = useCallback((publicToken, metadata) => {
        // try {
        //     const test = await axios.post("/api/plaid/create-access-token", { publicToken })
        //     console.log(test)
        // } catch (err) {
        //     console.log(err)
        // }
        console.log(publicToken)
    }, [])

    const onEvent = useCallback(eventName => {
        if (eventName === "HANDOFF") console.log("Awesome")
    }, [dispatch])

    const config = { clientName: "Our Budget", token, onSuccess, onEvent }

    const { open, ready, error } = usePlaidLink(config)

    useEffect(() => {
        const createToken = async () => {
            try {
                const response = await axios.post("/api/plaid/create-link-token")
                setToken(response.data)
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
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