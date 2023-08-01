import React from "react";
import { Link } from "react-router-dom";
import Logo from "./imgs/logo.jpeg";

function NavBar(){
return(
    <header>
    <p>
      <img src={Logo} alt="Codespresso Logo"  className="codeLogo"/>
    </p>

    <ul>
      <li>
        <p>Home</p>
      </li>
      <li>
      <Link to="/AboutUs">
      <p>About Us</p>
    </Link>
       </li>
        <li>
        <Link to ="/List">
        <p>Receipe List</p>
        </Link>
        </li>
    
      <li>
        <Link to ="/Footer">
        <p>Contact Us</p>
        </Link>
      </li>
    </ul>
  </header>
)
}

export default NavBar;