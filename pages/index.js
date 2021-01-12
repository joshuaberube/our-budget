import Head from 'next/head'
import { useState } from 'react'
import AddBudgetItem from '../components/AddBudgetItem'

const Home = () => {
  const [budgetItems, setBudgetItems] = useState([])
  const [categories, setCategories] = useState([])

  return (
    <div>
      <Head>
        <title>Our Budget</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hey</h1>
        <AddBudgetItem />
      </main>
    </div>
  )
}

export default Home