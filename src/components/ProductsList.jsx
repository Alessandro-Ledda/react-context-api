import { useBudgetMode } from "../context/BudgetContext";

// import product card 
import ProductCard from "./productCard";

function ProductsList() {

    // usiamo contesto e prendiamo valore che ci serve
    const { products } = useBudgetMode()

    return (
        <div className="container">
            <h1>Lista Prodotti</h1>
            <div className="products-content">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsList