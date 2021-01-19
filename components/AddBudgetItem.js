import { useState } from 'react'
import Categories from './Categories/Categories'
import DropdownMenu from './DropdownMenu/DropdownMenu'


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
        // <form>
        //     <fieldset>
        //         <legend>Add a budget item</legend>
        //         <Categories />
        //     </fieldset>
        // </form>
        
        <DropdownMenu config={[
            {
              "title": "Option 1",
              "submenu": null
            },
            {
              "title": "Option 2",
              "submenu": [
                {
                  "title": "Option 2.1",
                  "submenu": [
                    {
                      "title": "Option 2.1.1",
                      "submenu": null
                    },
                    {
                      "title": "Option 2.1.2",
                      "submenu": null
                    }
                  ]
                },
                {
                  "title": "Option 2.2",
                  "submenu": [
                    {
                      "title": "Option 2.2.1",
                      "submenu": null
                    },
                    {
                      "title": "Option 2.2.2",
                      "submenu": null
                    }
                  ]
                }
              ]
            }
          ]}/>
    )
}

export default AddBudgetItem