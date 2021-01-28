import { useState } from 'react'
import Categories from './Categories/Categories'
import DropdownMenu from './DropdownMenu/DropdownMenu'

let categoriesArr = [{
    title: "Food",
    subcategory: [
        { title: "Grocery", subcategory : null },
        {
            title: "Restaurants",
            subcategory: [
                {
                    title: "Fast Food", 
                    subcategory: null
                }, 
                {
                    title: "Sit down", 
                    subcategory: null
                }
            ]
        }
    ]
    },
    {
        title: "Shopping",
        subcategory: [
            { title: "Clothing", subcategory: null },
            {
                title: "Electronics & Software",
                subcategory: [
                    {title: "Video Games", subcategory: null}, 
                    {title: "Apps", subcategory: null}
                ]
            }
        ]
    },
    { 
        title: "testing",
        subcategory : null
    },
    {
        title: "Testing2",
        subcategory: [
            {title: "wow", subcategory: null}, 
            {title: "much wow indeed", subcategory: null}
        ]
    },
]


const AddBudgetItem = ({setBudgetItems}) => {
    const [budgetItemInputs, setBugetItemInputs] = useState("")
    const [categoriesDropdown, setCategoriesDropdown] = useState(false)

    

    
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
                <input type="search" onClick={() => setCategoriesDropdown(!categoriesDropdown)} value="test" />
                {categoriesDropdown ? <DropdownMenu categories={categoriesArr} classTest /> : null}
            </fieldset>
        </form>
        
    )
}

export default AddBudgetItem