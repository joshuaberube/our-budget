import { useEffect, useState } from "react"
import firebase from "../firebase"

const useUser = () => {
    const [user, setUser] = useState({value: null, status: "idle", error: null})

    useEffect(() => {
        if (user.status === "success") return

        setUser({...user, status: "loading"})

        const listener = firebase.auth().onAuthStateChanged(async user => {
            if (user) {
                const userData = await firebase.firestore().collection('users').doc(user.uid).get()
                setUser({value: userData.data(), status: "success", error: null})
            } else {
                setUser({value: null, status: "error", error: "No user logged in"})
            }
        })

        return () => listener()
    }, [firebase.auth()])

    return user
}

export { useUser }