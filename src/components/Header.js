import React from 'react'
import { Link } from 'react-router-dom';
import '../Sass/header.scss'

const Header = () => {
    return (
        <header className="header-main container">
         <Link to="/">home</Link>
         <nav>
          <ul className="nav-ul-flex">
            <li><Link to="/favorites">favorites</Link></li>
            <li><Link to="/about">about us</Link></li>
          </ul>
        </nav>
        </header>
    )
}

export default Header
