import React from 'react'
import { Link } from 'react-router-dom';
import '../Sass/header.scss'

const Header = () => {
    return (
        <header className="header-main container">
         <Link to="/">home</Link>
         <nav>
          <ul className="nav-ul-flex">
            <li className="border-left"><Link to="/favorites">favorites</Link></li>
            <li className="border-left"><Link to="/about">about us</Link></li>
            <li className="border-left"><Link to="/account">my account</Link></li>
            <li><Link to="/contact">contact us</Link></li>
          
          </ul>
        </nav>
        </header>
    )
}

export default Header
