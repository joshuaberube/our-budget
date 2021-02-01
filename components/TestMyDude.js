import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const TestMyDude = () => {
    const isLoggedIn = true
    const [token, setToken] = useState("")
    const [accessToken, setAccessToken] = useState("")

    const linkHandler = useCallback(() => (
        Plaid.create({
            token,
            onSuccess: async publicToken => {
                const test = await axios.post("/api/plaid/create-access-token", {publicToken})
                    .catch(err => console.log(err))

                setAccessToken(test.data)
            }
        })
    ), [token])

    useEffect(() => {
        const createToken = async () => {
            const response = await axios.post("/api/plaid/create-link-token")
                .catch(err => console.log(err))

            setToken(response.data)
        }

        if (isLoggedIn) createToken()
    }, [isLoggedIn])

    return (
        <input type="button" onClick={() => linkHandler().open()} value="plaidLink" />
    )
}

export default TestMyDude