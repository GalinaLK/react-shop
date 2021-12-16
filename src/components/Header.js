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
      <>
        <header className="header-main container">
        <nav className="nav-desc">
          <div className="logo-hamb">
            <Link to="/" id='logo'><img src={logo} alt="link home" width="30px" height="30px" /></Link>
         
            <a href="#" class="icon" onClick={showHam}>
              <i class="fa fa-bars" id="hamb" ></i>
            </a>
          </div>
          <div className="hidden" id="nav-d">
            <Link to="/favorites">favorites</Link>
            <Link to="/about">about us</Link>
            <Link to="/account">my account</Link>
            <Link to="/contact">contact us</Link>         
          </div>
          </nav>
      </header>  
     </>
    )
}

export default Header
