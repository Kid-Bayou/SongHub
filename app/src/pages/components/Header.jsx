import {Link, NavLink} from "react-router-dom"
import logo from "../../assets/logo.png"

function Header() {
    return (
        <>
            <header className="header">
                <Link className="logo-container" to="/">
                    <img src={logo} className="logo" />
                    <p className="logo-name">SongHub</p>
                </Link>
                <nav className="nav">
                    <NavLink to="/about" className="nav-text">
                        About
                    </NavLink>
                    <NavLink to="/songs" className="nav-text">
                        Songs
                    </NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header