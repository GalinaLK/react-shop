import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../Sass/header.scss'
import logo from '../photos/logo.avif';

const Header = () => {

  const [hamClosed, setHamClosed] = useState(true);

  function showHam() {
    const hamb = document.getElementById("hamb");
    const links = document.getElementById("nav-d");
    
    links.classList.toggle("hidden");

    if (hamClosed) { 
      hamb.classList.remove("fa-bars");
      hamb.classList.add("fa-times");
      setHamClosed(false);
    } else {
      hamb.classList.remove("fa-times");
      hamb.classList.add("fa-bars"); 
      setHamClosed(true);
    }
  }
    return (
      <header className="header-container">
        <nav className="nav-desc">
          <div className="top-nav">
            <Link to="/" id='logo'>
            <img src={logo} 
                alt="link home" 
                width="30px" 
                height="30px" />
            </Link>      
            <form id='search'>
            <input type="search" name="q" placeholder="Search query"/>
            <input type="submit" value="&#8811;"/>
            </form>
            <button class="icon" onClick={showHam}>
              <i class="fa fa-bars" id="hamb" ></i>
            </button>
          </div>
          <ul className="hidden" id="nav-d">
            <li><Link to="/favorites">favorites</Link></li>
            <li><Link to="/about">about us</Link></li>
            <li><Link to="/account">my account</Link></li>
            <li><Link to="/contact">contact us</Link></li>         
          </ul>
        </nav>
     </header>
    )
}

export default Header
