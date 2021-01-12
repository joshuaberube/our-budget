const Category = ({categoryType, availableCategories, selectedCategory, setSelectedCategory}) => (
    <>
        <label>
            <span>{categoryType} categories: </span>
            <input type="text" list={categoryType} onChange={e => setSelectedCategory({...selectedCategory, [categoryType]: e.target.value})} />
            <datalist id={categoryType}>
                {availableCategories.map(category => (
                    <option 
                        key={category[`${categoryType}CategoryTitle`]} 
                        value={category[`${categoryType}CategoryTitle`]}
                    />
                ))}
            </datalist>
        </label>
        {availableCategories.some(category => (
            selectedCategory[categoryType] === category[`${categoryType}CategoryTitle`]
        )) 
        ? null
        : <input 
            type="button" 
            value={`Add a new ${categoryType} category?`} 
            onClick={() => setCategories([...categories, selectedCategory])} 
        /> 
        }
    </>
)

export default Category