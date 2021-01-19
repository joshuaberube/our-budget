import { useState } from 'react'
import Category from './Category'

let categoriesArr = [
    {
        title: "Food",
        subCategories: [
            { title: "Grocery", subCategories : null },
            {
                title: "Restaurants",
                subCategories: [
                    {title: "Fast Food", subCategories : null}, 
                    {title: "Sit down", subCategories : null}
                ]
            }
        ]
    },
    {
        title: "Shopping",
        subCategories: [
            { title: "Clothing", subCategories : null },
            {
                title: "Electronics & Software",
                subCategories: [
                    {title: "Video Games", subCategories : null}, 
                    {title: "Apps", subCategories : null}
                ]
            }
        ]
    },
    { 
        title: "testing",
        subCategories : null
    },
    {
        title: "Testing2",
        subCategories: [
            {title: "wow", subCategories : null}, 
            {title: "much wow indeed", subCategories : null}
        ]
    },
]

const Categories = ({}) => {
    const [selectedCategory, setSelectedCategory] = useState({primary: "", secondary: "", tertiary: ""})

    //# This will be a useSelector
    const [categories, setCategories] = useState([...categoriesArr])

    const categorySearchCheck = (categoriesArr, categoryType) => {
        const subCategoryType = categoryType === "primary" ? "secondary" : "tertiary"

        // checks if the user input matches an saved categories
        const foundCategory = categoriesArr.find(category => (
            category[`${categoryType}CategoryTitle`].toUpperCase() 
            === selectedCategory[categoryType].toUpperCase()
        ))
        
        // checks if the currently selected category contains any sub categories
        const subCategories = foundCategory?.[`${subCategoryType}Categories`]
        
        //TODO update this
        const test = 
            foundCategory ? subCategories 
                ? subCategories 
                : categoryType === "tertiary" 
            : false

        return test
    }


    const primarySearch = categorySearchCheck(categories, "primary")
    const secondarySearch = primarySearch ? categorySearchCheck(primarySearch, "secondary") : false
    //if true, it means all three of the categories already exist 
    const tertiarySearch = secondarySearch ? categorySearchCheck(secondarySearch, "tertiary") : false

    
    const displayCategory = (categoryType, availableCategories) => (
        <Category 
            categoryType={categoryType}
            availableCategories={availableCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
        />
    )

    
    return (
        <div>
            {displayCategory("primary", categories)}
            {primarySearch ? displayCategory("secondary", primarySearch) : null}
            {secondarySearch ? displayCategory("tertiary", secondarySearch) : null}
        </div>
    )
}

export default Categories