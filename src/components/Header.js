import React from 'react'
import { Link } from 'react-router-dom';
import '../Sass/header.scss'

const Header = () => {

  function showHam() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
    return (
      <div>
        <header className="header-main container">
         <Link to="/">home</Link>
         <a href="javascript:void(0);" class="icon" onClick={showHam}>
    <i class="fa fa-bars"></i>
  </a>

         <nav className="nav-desc">
          <ul className="nav-ul-flex">
            <li className="border-left"><Link to="/favorites">favorites</Link></li>
            <li className="border-left"><Link to="/about">about us</Link></li>
            <li className="border-left"><Link to="/account">my account</Link></li>
            <li><Link to="/contact">contact us</Link></li>
          
          </ul>
        </nav>
        </header>
                <div class="topnav">
                <div id="myLinks">
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                </div>
                
              </div>
              </div>
    )
}

export default Header
