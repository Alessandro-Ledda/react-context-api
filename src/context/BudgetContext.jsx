// import context + var di stato, effect
import { createContext, useContext, useState, useEffect } from "react";

const BudgetContext = createContext();

const endPoint = "https://fakestoreapi.com/products";

import axios from "axios";

function BudgetModeProvider({ children }) {
    // creazione var di stat per la lista prodotti
    const [products, setProducts] = useState([]);

    // creazione var di stato per id budget
    const [budgetMode, setBudgetMode] = useState(false);

    // funzione gestione budget
    const toggleBudgetMode = () => {
        setBudgetMode(curr => !curr);
    }

    function fetchProducts() {
        axios.get(endPoint)
            .then((response) => setProducts(response.data))
            .catch(errore => console.error("request not found"))
            .finally()
    }

    useEffect(fetchProducts, []);

    return (
        <BudgetContext.Provider
            value={{
                products,
                budgetMode,
                toggleBudgetMode
            }}
        >
            {children}
        </BudgetContext.Provider>
    );
}

// definiamo hook per consumare il contesto
function useBudgetMode() {
    const context = useContext(BudgetContext);
    return context
}

// export provaider e hook
export { BudgetModeProvider, useBudgetMode }