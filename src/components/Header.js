import React from 'react'
import { Link } from 'react-router-dom';
import '../Sass/header.scss'
import logo from '../photos/logo.jpg';

const Header = () => {
//    "sass": "sass src/Sass:src/Css --watch --no-source-map"

  function showHam() {
    const links = document.getElementById("myLinks");
    const x = document.getElementById("icon-close");
    const open = document.getElementById("icon-open");

    if (links.style.display === "block") {
      links.style.display = "none";
      x.style.display = "none";
      open.style.display = "block";


    } else {
      links.style.display = "block";
      x.style.display = "block";
      open.style.display = "none";

    }
  }
    return (
      <>
        <header className="header-main container">
         <Link to="/"><img src={logo} alt="link home" width="30px" /></Link>
         <a href="#" class="icon" id="icon-open" onClick={showHam}>
    <i class="fa fa-bars"></i>
  </a>
  <a href="#" class="icon" id="icon-close" onClick={showHam}>
    <i class="fas fa-times"></i>
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
                <Link to="/favorites">favorites</Link>
            <Link to="/about">about us</Link>
            <Link to="/account">my account</Link>
            <Link to="/contact">contact us</Link>
          </div>
                
              </div>
              </>
    )
}

export default Header
