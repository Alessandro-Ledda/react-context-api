import { useBudgetMode } from "../context/BudgetContext"

function ProductCard({ product }) {

    // destrutturiamo oggetto props
    const { title, image, price, category, description, id } = product

    return (
        <div className="card">
            <h3 className="title">{title}</h3>
            <img src={image} alt="" />
            <h4 className="price">{price}</h4>
            <h4 className="category">{category}</h4>
            <p className="description">{description}</p>
        </div>
    )
}

export default ProductCard