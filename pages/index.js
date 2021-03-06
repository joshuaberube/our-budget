import Head from 'next/head'
import { useState, useEffect } from 'react'
import AddBudgetItem from '../components/AddBudgetItem'
import useSWR from "swr"
import axios from "axios"
import TestMyDude from '../components/TestMyDude'
import PlaidLink from "../components/PlaidLink/PlaidLink"
import TaxCalculator from '../components/TaxCalculator/TaxCalculator'



// const fetcher = (...[url, body]) => axios.post(url, body).then(res => res.data)
// const otherFetcher = (...[url, body]) => fetch(url, {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(body)
// }).then(r => r.json())

const Home = () => {
  // const [budgetItems, setBudgetItems] = useState([])
  // const [categories, setCategories] = useState([])
  // const [userInput, setUserInput] = useState({email: "", password: ""})
  // const [shouldFetch, setShouldFetch] = useState(false)


  // const { data, error } = useSWR(shouldFetch ? ["/api/login", userInput] : null, fetcher)
  // const test55 = useSWR(shouldFetch ? ["/api/login", userInput] : null, otherFetcher)
  // const { data, error } = useSWR(shouldFetch ? "/api/bank-link" : null, fetcher)

  // const changeHandler = e => {
  //     setUserInput({...userInput, [e.target.name]: e.target.value})
  // }

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   setShouldFetch(true)
  //   console.log("Data: ", data)
  // }

  const handleClick = async () => {
    const data = await axios.post("/api/plaid/create-access-token", {})
    console.log(data)
  }






  return (
    <div>
      <Head>
        <title>Our Budget</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          {/* <AddBudgetItem /> */}
          {/* <form onSubmit={handleSubmit}>
            <input type="email" name="email" onChange={changeHandler} />
            <input type="password" name="password" onChange={changeHandler} />
            <button type="submit">login</button>
          </form> */}
          {/* <input type="button" onClick={test} value="get Federal taxes" /> */}
          {/* <input type="button" onClick={() => taxCaluclator('married', 2020, 'ut', 90000)} value="get Tax Info" /> */}
          {/* <PlaidLink /> */}
          <TestMyDude />
          <TaxCalculator />
      </main>
    </div>
  )
}

export default Home