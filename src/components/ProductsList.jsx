import { useBudgetMode } from "../context/BudgetContent";

// import product card 
import ProductCard from "./productCard";

function ProductsList() {
    return (
        <div className="container">
            <h1>Lista Prodotti</h1>
            <div className="products">
                {ProductsList.map(product => (
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