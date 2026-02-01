import { useBudgetMode } from "../context/BudgetContext"

function HomePage() {

    const { products, budgetMode } = useBudgetMode();

    const renderProducts = budgetMode

        ? products.filter(p => Number(p.price) <= 30)
        : products

    return (
        <>
            <div>
                <h1>
                    {budgetMode ? "prodotti filtarti" : "tutti i prodotti"}
                </h1>
                <div className="container">
                    <div className="products-content">
                        {renderProducts.map(product => (
                            <div key={product.id} className="card">
                                <img src={product.image} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p>{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage