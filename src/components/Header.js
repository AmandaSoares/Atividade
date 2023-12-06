import { Link } from "react-router-dom"
import './Header.module.css'

function Header () {
    return (
        <header>
            <Link to={'/'}>Home</Link>
            <Link to={'/contato'}>Contato</Link>
            <Link to={'/suporte'}>Suporte</Link>
        </header>  
    )
}

export default Header

