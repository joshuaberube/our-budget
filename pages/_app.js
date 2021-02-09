import '../styles/globals.css'
import "../components/DropdownMenu/test.css"
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from '../components/Header/Header'
import firebase from "../firebase"

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  const notOnEntryPage = router.pathname !== "/entry"

  useEffect(() => {
    if (notOnEntryPage && !firebase.auth().currentUser) {
      router.push("/entry")
    }
  }, [])

  return (
    <>
      {notOnEntryPage && <Header />}
      <Component {...pageProps} />
    </>
  )
}

export default App
