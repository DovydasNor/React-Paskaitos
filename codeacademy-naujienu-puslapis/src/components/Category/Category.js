import './Category.css'

function Category({category}) {
    
    const categoryElement = category && <span className="blue-text">{category}</span>
    
    return(
        categoryElement
    )
}

export default Category