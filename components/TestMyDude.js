import { useState, useEffect } from 'react'
import axios from 'axios'

const TestMyDude = () => {
    const isLoggedIn = true
    const [token, setToken] = useState("")

    useEffect(() => {
        console.log(window)
        const linkHandler = Plaid.create({
                token,
                onSuccess: async publicToken => {
                    const test = await axios.post("/api/plaid/create-access-token", {publicToken})
                    console.log(test)
                }
            })

            linkHandler.open()
    }, [])

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
        // <input type="button" onClick={linkHandler.open} value="Make request" />
        <div>
            cool
        </div>
    )
}

export default TestMyDude