import { useEffect, useState } from "react"
import firebase from "../firebase"

const useUser = async () => {
    const [value, setValue] = useState({})
    const [error, setError] = useState(null)

    const auth = firebase.auth()
    const firestore = firebase.firestore()
    const user = auth.currentUser
    const listener = auth.onAuthStateChanged(setValue, setError)

    useEffect(() => {
        
    }, [listener])
    
    if (user) {
        const userData = await firestore.collection('users').doc(user.uid).get()
        setValue(userData.data())
    } else {
        setError("No user logged in")
    }

    return [value, error]
}

export default useUser