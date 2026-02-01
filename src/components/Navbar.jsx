import { Link, NavLink } from "react-router-dom"
import { useBudgetMode, } from "../context/BudgetContext"
function Navbar() {

    const links = [
        { path: '/', label: 'HomePage' },
        { path: '/prodotti', label: 'Prodotti' }
    ]

    const { budgetMode, toggleBudgetMode } = useBudgetMode();

    return (
        <nav className="nav">
            <div className="nav-content">
                <ul>
                    {links.map((link, i) => (
                        <li
                            key={i}>
                            <NavLink to={link.path}>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                    <li className="btn">
                        <button className="btn"
                            onClick={toggleBudgetMode}>
                            {budgetMode
                                ? "Disattiva modalità budget"
                                : "Attiva modalità budget"}
                        </button>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar