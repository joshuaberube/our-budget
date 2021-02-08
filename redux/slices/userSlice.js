import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firebase from '../../firebase'

const initialState = {
    isLoggingIn: true,
    isLoggedIn: false,
    user: {},
    status: "",
    error: null
}

export const login = createAsyncThunk("user/login", async ({fullName, email, password, phoneNumber, state}, thunkAPI) => {
    const {isLoggingIn} = thunkAPI.getState().user
    const firestore = firebase.firestore()

    if (isLoggingIn) {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password)

        const userData = await firestore.collection('users').doc(user.uid).get()
        return userData
    } else {
        //TODO Update creating an account to take the user's phone number, location, email, password, first and last name,
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)

        

        const userData = await firestore.collection('users').doc(user.uid).set({ fullName, email, phoneNumber, state })
        return userData

        // //TODO Update sendEmailVerification to link you back to the site for better UX
        // await firebase.auth().currentUser.sendEmailVerification()
    }
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeIsLoggingIn: state => {
            state.isLoggingIn = !state.isLoggingIn
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.user = action.payload
            state.status = "success"
            state.isLoggedIn = true
        },
        [login.pending]: state => {
            state.status = "pending"
        },
        [login.rejected]: (state, action) => {
            state.error = action.error
        }
    }
})


export const { changeIsLoggingIn } = userSlice.actions
export default userSlice.reducer