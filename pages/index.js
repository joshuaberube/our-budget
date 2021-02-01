import Head from 'next/head'
import { useState, useEffect } from 'react'
import AddBudgetItem from '../components/AddBudgetItem'
import useSWR from "swr"
import axios from "axios"
import TestMyDude from '../components/TestMyDude'
import PlaidLink from "../components/PlaidLink/PlaidLink"



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

  const token = {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElfS0VZX01BTkFHRVIiLCJodHRwOi8vdGF4ZWUuaW8vdXNlcl9pZCI6IjYwMTgzNDg0N2NlYmZmNDUwZDI4NTk0OSIsImh0dHA6Ly90YXhlZS5pby9zY29wZXMiOlsiYXBpIl0sImlhdCI6MTYxMjE5OTA0NH0.wWtHiOdSIP-pNF_btVUijE5YU4mH6WkdSFJMiUgswEw'}
  const test = async () => {
    const test3 = await axios.get("https://taxee.io/api/v2/federal/2020", {headers: token})
    console.log(test3.data)
  }

  const stateTaxes = async () => {
    const taxes = await axios.get("https://taxee.io/api/v2/state/2020/ut", {headers: token})
    console.log(taxes.data)
  }


  const bothTaxCalculations = (grossIncome, taxInfo) => {
    const taxableIncome = grossIncome - taxInfo.deductions[0].deduction_amount

    if (taxInfo.income_tax_brackets.length > 1) {
      const {taxesOwed} = taxInfo.income_tax_brackets.reduce(({taxable, taxesOwed}, {bracket, marginal_rate, amount}, index) => {

        if (taxable > bracket) {
          taxesOwed += amount
          taxable -= bracket

          return {taxable, taxesOwed}
        } else if (taxable) {
          const previousTaxPercent = (taxInfo.income_tax_brackets[index - 1].marginal_rate / 100).toFixed(2)

          taxesOwed += taxable * previousTaxPercent
          taxable = 0

          return {taxable, taxesOwed}
        } else {
          return {taxable, taxesOwed}
        }
      }, {taxable: taxableIncome, taxesOwed: 0})
  
      return taxesOwed
    } else {
      const taxPercentage = (taxInfo.income_tax_brackets[0].marginal_rate / 100).toFixed(4)
      const flatRateTax = taxPercentage * taxableIncome

      return flatRateTax
    }
  }

  const taxCaluclator = async (filingStatus, year, state, grossIncome) => {
    try {
      const { data: federalTaxes } = await axios.get(`https://taxee.io/api/v2/federal/${year}`, {headers: token})
      const { data: stateTaxes } = await axios.get(`https://taxee.io/api/v2/state/${year}/${state}`, {headers: token})

      // const stateTax = stateTaxableIncome * stateTaxes.income_tax_brackets

      const federalTax = bothTaxCalculations(grossIncome, federalTaxes[filingStatus])
      const stateTax = bothTaxCalculations(grossIncome, stateTaxes[filingStatus])

      console.log(`You Owe ${federalTax} in Federal taxes`)
      console.log(`You owe ${stateTax} in State taxes`)

    } catch (err) {
      console.log(err)
    }
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
          <input type="button" onClick={() => taxCaluclator('married', 2020, 'ut', 90000)} value="get Tax Info" />
          <PlaidLink />
          <TestMyDude />
      </main>
    </div>
  )
}

export default Home