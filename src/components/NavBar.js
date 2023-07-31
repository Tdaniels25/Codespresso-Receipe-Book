import React from "react";
import { Link } from "react-router-dom";
import Logo from "./imgs/logo.jpeg";

function NavBar(){
return(
    <header>
    <a >
      <img src={Logo} alt="Codespresso Logo"  className="codeLogo"/>
    </a>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
      <Link to="/AboutUs">
      <a>About Us</a>
    </Link>
       </li>
        <li>
        <Link to ="/List">
        <a>Receipe List</a>
        </Link>
        </li>
      <li>
        <Link to ="">
        <a>Deatiled Receipe</a>
        </Link>
      </li>
      <li>
        <Link to ="/Footer">
        <a>Contact Us</a>
        </Link>
      </li>
    </ul>
  </header>
)
}

export default NavBar;