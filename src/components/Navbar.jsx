import { Link, NavLink } from "react-router-dom"
function Navbar() {

    const links = [
        { path: '/', label: 'HomePage' },
        { path: '/prodotti', label: 'Prodotti' }
    ]

    return (
        <nav className="container-nav">
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
                </ul>
                <button className="btn">Attiva Modalità Budget</button>
            </div>
        </nav>
    )
}

export default Navbar