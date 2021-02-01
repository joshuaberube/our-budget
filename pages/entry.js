import { useAuthState } from 'react-firebase-hooks/auth'
// import firebaseui from 'firebaseui'
// import 'firebaseui/dist/firebaseui.css'
// import firebase from 'firebase'
import { useState } from 'react'

const Entry = () => {
    const [email, setEmail] = useState("test@test.com")
    const [password, setPassword] = useState("test")

    const createUser = async () => {

        const userCredentials = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(userCredentials)
    }
    
    return (
        <input 
            type="button" 
            onClick={createUser} 
            value="wat" 
        />
    )
}

export default Entry