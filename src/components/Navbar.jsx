import "./Navbar.css"
import { NavLink } from "react-router-dom"

// Componente do header
const Navbar = () => {
  return (
    <div id="navbar">
        <img id="navbar-logo" src="logo.png" alt="Logo" />
        <ul>
            <li className="navbar-list">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="navbar-list">
                <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="navbar-list">
                <NavLink to="/galeria">Galeria</NavLink>
            </li>
            <li className="navbar-list">
                <NavLink to="/contato">Contato</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar