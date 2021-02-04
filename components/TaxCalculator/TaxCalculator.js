import axios from "axios"
import { useState } from 'react'

const TaxCalculator = () => {
    const [userInput, setUserInput] = useState({year: 2020, grossIncome: 90000, filingStatus: 'married',  state: 'ut'})
    const {year, grossIncome, filingStatus, state} = userInput

    

    const bothTaxCalculations = (grossIncome, taxInfo) => {
        const taxableIncome = grossIncome - taxInfo.deductions[0].deduction_amount
    
        if (taxInfo.income_tax_brackets.length > 1) {
          const {taxesOwed} = taxInfo.income_tax_brackets.reduce(({taxable, taxesOwed}, {bracket, amount}, index) => {
    
            if (taxable > bracket) {
              taxesOwed += amount
              taxable -= bracket
    
              return {taxable, taxesOwed}
            } else if (taxable) {
              const previousTaxPercent = (taxInfo.income_tax_brackets[index - 1].marginal_rate / 100).toFixed(4)
    
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
    
      const token = {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElfS0VZX01BTkFHRVIiLCJodHRwOi8vdGF4ZWUuaW8vdXNlcl9pZCI6IjYwMTgzNDg0N2NlYmZmNDUwZDI4NTk0OSIsImh0dHA6Ly90YXhlZS5pby9zY29wZXMiOlsiYXBpIl0sImlhdCI6MTYxMjE5OTA0NH0.wWtHiOdSIP-pNF_btVUijE5YU4mH6WkdSFJMiUgswEw'}
      const contentType = {'Content-Type': 'application/x-www-form-urlencoded'}
      const taxCaluclator = async (filingStatus, year, state, grossIncome) => {
        try {
          const { data: federalTaxes } = await axios.get(`https://taxee.io/api/v2/federal/${year}`, {headers: token})
          const { data: stateTaxes } = await axios.get(`https://taxee.io/api/v2/state/${year}/${state}`, {headers: token})
    
    
          const federalTax = bothTaxCalculations(grossIncome, federalTaxes[filingStatus])
          const stateTax = bothTaxCalculations(grossIncome, stateTaxes[filingStatus])
    

        } catch (err) {
          console.log(err)
        }
      }

      // const test = async () => {
      //     try {
      //         const test2 = await axios.post(`https://taxee.io/api/v2/calculate/${year}?pay_rate=${grossIncome}&filing_status=${filingStatus}&state=${state}`, {...token, contentType})
      //         console.log(test2.data)
      //     } catch (err) {
      //         console.log(err)
      //     }
      // }

    return (
        <div>
            <h1>Tax Calculator</h1>
            {/* <input type="button" onClick={test} value="get Taxes" /> */}
        </div>
    )
}

export default TaxCalculator
