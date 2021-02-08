import firebase from "firebase/app"
import "firebase/auth"
import "firebase/analytics"
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyBAjhNxSmyLfR2sZFQXkEY8TIwBTgNcgwg",
    authDomain: "our-budget-302516.firebaseapp.com",
    projectId: "our-budget-302516",
    storageBucket: "our-budget-302516.appspot.com",
    messagingSenderId: "319479302062",
    appId: "1:319479302062:web:8668ea9bcf2dab11166a3f",
    measurementId: "G-DPWPCYRXWB"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()