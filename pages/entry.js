import firebase from '../firebase'
import { useState } from 'react'
import Head from 'next/head'
import { useAuthState } from 'react-firebase-hooks/auth'
import useUser from '../hooks/userUser'

const Entry = () => {
    const [entryInputs, setEntryInputs] = useState({fullName: "", email: "", password: "", phoneNumber: "", state: ""})
    const [isLoggingIn, setIsLoggingIn] = useState(true)
    const [user, setUser] = useState({})
    // const [error, setError] = useState(null)
    // const [user11, loading, ] = useAuthState(firebase.auth())
    // const [value, loading] = useCollection(firebase.firestore().collection('users').doc(user.uid))
    // const [user1, error] = useUser()

    console.log(useUser())
    // console.log(error)
    const states = [
        "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", 
        "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", 
        "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK",
        "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", 
        "WI", "WV", "WY"
    ]

    const entryInputsArr = [
        {label: "Full name", type: "text", name: "fullName", autoComplete: "name"},
        {label: "Phone number", type: "tel", name: "phoneNumber", autoComplete: "tel"},
        {label: "Email", type: "email", name: "email", autoComplete: "email"},
        {label: "Password", type: "password", name: "password"}
    ]

    const currentEntryInputs = isLoggingIn ? entryInputsArr.splice(2, 4) : entryInputsArr

    const changeHandler = e => {
        setEntryInputs({...entryInputs, [e.target.name]: e.target.value})
    }

    const entryInputsMapped = currentEntryInputs.map(({label, type, name, autoComplete}) => (
        <div key={name}>
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                id={name}
                name={name}
                value={entryInputs[name]} 
                autoComplete={autoComplete} 
                onChange={changeHandler} 
                required
            />
        </div>
    ))

    const onSubmitHandler = async e => {
        const { email, password } = entryInputs
        e.preventDefault()

        try {
            const firestore = firebase.firestore()

            if (isLoggingIn) {
                const {user} = await firebase.auth().signInWithEmailAndPassword(email, password)
        
                console.log(user)
                const userData = await firestore.collection('users').doc(user.uid).get()
                setUser(userData.data())
            } else {
                const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password)
        
                const userData = await firestore.collection('users').doc(user.uid).set({ fullName, email, phoneNumber, state, uid: user.uid, emailVerified: user.emailVerified })
                setUser(userData.data())
        
                // //TODO Update sendEmailVerification to link you back to the site for better UX
                // await firebase.auth().currentUser.sendEmailVerification()
            }
        } catch (err) {
            setError(error.message)
        }

    }
    
    const isLoggingInStateText = isLoggingIn ? "Login" : "Register"

    console.log(user)

    // if (error) {
    //     return 
    // }

    return (
        <>
            <Head>
                <title>{isLoggingInStateText}</title>
            </Head>
            <form onSubmit={onSubmitHandler}>
                <fieldset>
                    <legend>{isLoggingInStateText}</legend>
                    <div>
                        {entryInputsMapped} 
                        {!isLoggingIn ? (
                            <div>
                                <label htmlFor='states'>State</label>
                                <select id='states' name="state" autoComplete='region' defaultValue="" onChange={changeHandler} required>
                                    <option value="" disabled>Choose your state</option>

                                    {states.map(state => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </select>
                            </div>
                        ) : null}
                    </div>
                    <div>
                        <input 
                            type="button" 
                            value={isLoggingIn ? "Create an account?" : "Already have an account?"} 
                            onClick={() => setIsLoggingIn(!isLoggingIn)}
                        />
                        <button type="submit">{isLoggingInStateText}</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default Entry