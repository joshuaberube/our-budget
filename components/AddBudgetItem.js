import { useState } from 'react'
import Categories from './Categories/Categories'

const AddBudgetItem = ({setBudgetItems}) => {
    const [budgetItemInputs, setBugetItemInputs] = useState("")

    

    
    //data to be entered: //# budget Limit, Category, Time frame, account(s) to look at
    // const inputsArr = [
    //     {type: "number", inputMode: "decimal", },
    // ]
    // const inputsMapped = inputsArr.map(input => (
    //     <input key={} />
    // ))

    return (
        <form>
            <fieldset>
                <legend>Add a budget item</legend>
                <div>
                    <Categories />
                </div>
            </fieldset>
        </form>
    )
}

export default AddBudgetItem