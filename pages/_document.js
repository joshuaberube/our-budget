import Document, { Html, Head, Main, NextScript } from 'next/document'
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/analytics"

class MyDocument extends Document {
  render() {

    const firebaseConfig = {
      apiKey: "AIzaSyBAjhNxSmyLfR2sZFQXkEY8TIwBTgNcgwg",
      authDomain: "our-budget-302516.firebaseapp.com",
      projectId: "our-budget-302516",
      storageBucket: "our-budget-302516.appspot.com",
      messagingSenderId: "319479302062",
      appId: "1:319479302062:web:8668ea9bcf2dab11166a3f",
      measurementId: "G-DPWPCYRXWB"
    }

    // Initialize Firebase
    console.log(!firebase.apps.length)
      // firebase.initializeApp(firebaseConfig)

    !firebase.apps.length
      ? firebase.initializeApp(firebaseConfig)
      : firebase.app()

    // firebase.analytics()

    return (
      <Html lang="en">
        <Head>
          <script src="https://cdn.plaid.com/link/v2/stable/link-initialize.js" ></script>
          <script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js"></script>
          <script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-analytics.js"></script>
          <script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-auth.js"></script>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument