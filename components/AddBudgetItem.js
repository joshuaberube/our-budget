import { useState } from 'react'

const AddBudgetItem = ({setBudgetItems}) => {
    const [budgetItemInputs, setBugetItemInputs] = useState("")
    const [selectedPrimaryCategory, setSelectedPrimaryCategory] = useState("")
    const [selectedSecondaryCategory, setSelectedSecondaryCategory] = useState("")
    const [selectedTertiaryCategory, setSelectedTertiaryCategory] = useState("")

    //categories data is structured as such:

    let categoriesArr = [
        {
            primaryCategoryTitle: "Food",
            secondaryCategories: [
                { secondaryCategoryTitle: "Grocery" },
                {
                    secondaryCategoryTitle: "Restaurants",
                    tertiaryCategories: ["Fast Food", "Sit down"]
                }
            ]
        },
        {
            primaryCategoryTitle: "Shopping",
            secondaryCategories: [
                { secondaryCategoryTitle: "Clothing" },
                {
                    secondaryCategoryTitle: "Electronics & Software",
                    tertiaryCategories: ["Video Games", "Apps"]
                }
            ]
        },
        { primaryCategoryTitle: "testing" },
        {
            primaryCategoryTitle: "Testing2",
            secondaryCategories: ["wow", "much wow indeed"]
        },
    ]

    const [categories, setCategories] = useState(categoriesArr)
    //data to be entered: //# budget Limit, Category, Time frame, account(s) to look at
    // const inputsArr = [
    //     {type: "number", inputMode: "decimal", },
    // ]
    // const inputsMapped = inputsArr.map(input => (
    //     <input key={} />
    // ))

    const test = (labelName, options, setState) => {
        return (
            <>
                <label>
                    <span>{labelName}: </span>
                    <input type="text" list={labelName} onChange={e => setState(e.target.value)} />
                    <datalist id={labelName}>
                        {options.map(optionName => <option key={optionName} value={optionName} /> )}
                    </datalist>
                </label>
            </>
        )
    }
    
    const categorySearchCheck = (categoryArr, categoryType, selectedCategory) => (
        categoryArr.find(category => (
            category[`${categoryType}CategoryTitle`].toUpperCase() === selectedCategory.toUpperCase()
        ))
    )



    const returnedList = categoriesArray => {
        const categoriesMapped = categoriesArray.map(({primaryCategoryTitle}) => primaryCategoryTitle)

        const test1 = categorySearchCheck(categoriesArray, "primary", selectedPrimaryCategory)
        const test2 = 
            test1?.secondaryCategories ? 
            test1.secondaryCategories.map(({secondaryCategoryTitle}) => secondaryCategoryTitle) 
            : false


        const test3 = test2 ? categorySearchCheck(test1.secondaryCategories, "secondary", selectedSecondaryCategory) : false
        console.log("test3: ", test3)

        const test4 = test3?.tertiaryCategories ? test3.tertiaryCategories : false
        console.log("test4: ", test4)


        


        // options.some(option => selectedCategory === option) ?
            
        // : <input type="button" value="Add new primary category?" onClick={() => setCategories([...categories, selectedCategory])} /> }

        return (
            <>
                {test("Primary Category", categoriesMapped, setSelectedPrimaryCategory)}
                {test2 ? test("Secondary Category", test2, setSelectedSecondaryCategory) : null}
                {test4 ? test("Tertiary Categories", test4, setSelectedTertiaryCategory) : null}
            </>
        )
    }

    

    

    return (
        <form>
            <fieldset>
                <legend>Add a budget item</legend>
                <div>
                    {returnedList(categories)}
                    
                </div>
            </fieldset>
        </form>
    )
}

export default AddBudgetItem