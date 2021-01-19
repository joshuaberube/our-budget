const DropdownMenu = ({categories, subcategories, classTest}) => (
    <ul className={subcategories ? null : "dropdown-menu" }>
        {categories.map(({title, subcategory}) => (
            <li key={title}>
                <span>{title}</span>
                {subcategory ? <DropdownMenu categories={subcategory} subcategories /> : null}
            </li>
        ))}
    </ul>
)

export default DropdownMenu