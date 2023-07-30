import React from "react";
import { Link } from "react-router-dom";
import Logo from "./imgs/codespresso-logo.jpeg";
import thumb1 from "./imgs/thumb1.jpeg";
import thumb2 from "./imgs/thumb2.jpg";
import thumb3 from "./imgs/thumb3.jpg";
import HeroImage from "./imgs/header-img2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import NavBar from "./components/NavBar";
import MainHero from "./components/Main";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function LandingPage() {
  return (
    <section>
      <div>
        {/*<div>
          <NavBar />,
          <MainHero />,
          <AboutUs />,
          <Footer />,
  <RecipeList />
  </div>*/}
        <Link to="/RecipeA">
          <p>RecipeA</p>
        </Link>
      </div>
      <div className="circle"></div>
      <header>
        <a href="#" className="logo">
          <img src={Logo} alt="Codespresso Logo" />
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Receipe List</a>
          </li>
          <li>
            <a href="#">Deatiled Receipe</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="textBox">
          <h1>
            Homebrewed Starbucks: <span>Your Favorite Receipes</span>
          </h1>
          <h2>Coffee Creations for Coders</h2>
          <p>
            A coffee recipe book designed for programmers at home. Discover a
            collection of meticulously crafted coffee recipes to fuel your
            coding passion and caffeine cravings. From lattes to espressos,
            become a home barista with expert tips and step-by-step
            instructions. Elevate your coding sessions with the perfect blend of
            coffee and code. Brew, sip, and code like never before.
          </p>

          <button className="receipe">Curate Your Coffee</button>
        </div>
        <div className="imgBox">
          <img src={HeroImage} alt="Header Img" className="hero-image"></img>
        </div>
      </div>
      <ul className="thumb">
        <li>
          <img src={thumb1} alt="thumbnail" />
        </li>
        <li>
          <img src={thumb2} alt="thumbnail" />
        </li>
        <li>
          <img src={thumb3} alt="thumbnail" />
        </li>
      </ul>
      <ul className="sci">
        <li>
          <a>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#fff" }}
              size="xl"
            />
          </a>
        </li>

        <li>
          <a>
            {" "}
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "#fff" }}
              size="xl"
            />
          </a>
        </li>

        <li>
          <a>
            {" "}
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#fff" }}
              size="xl"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default LandingPage;
