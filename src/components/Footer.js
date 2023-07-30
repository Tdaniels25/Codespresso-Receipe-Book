import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logo from "./imgs/codespresso-logo.jpeg"

function Footer(){
    return(
        <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Codespresso Logo" />
        <span>Coffee Creations For Coders</span>
        <h3 className="subscribe">Subscribe Now</h3>
        <input type="email" className="email" placeholder="Enter your email"></input>
        <button className="subscribe-btn">Subscribe</button>

        <div className="info">
          <h3>Information</h3>
          <a href="about-us">About Us</a>
          <a href="receipes">Recipes</a>
          <a href="detailed-recipes">Detailed Recipes</a>
        </div>

        <div className="services">
          <h3>Our Services</h3>
          <span>Craft the perfect recipes</span>
          <span>Organize coffee tasting events</span>
          <span>Create personalized coffee blends</span>
        </div>

        <div className="contact">
          <h3>Contact Us</h3>
          <div>
          <FontAwesomeIcon icon={faPhone} style={{ color: '#ddab70' }} size="lg" />
          <span>+21 345 6754</span>
          </div>
          <div>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: '#ddab70' }} size="lg" /> 
          <span>coffee@codespresso.com</span>
          </div>
            <div className="socials">
          <FontAwesomeIcon icon={faInstagram} style={{ color: '#ddab70' }} size="lg" />
          <FontAwesomeIcon icon={faTwitter} style={{ color: '#ddab70' }} size="lg" />
          <FontAwesomeIcon icon={faFacebook} style={{ color: '#ddab70' }} size="lg" />
          </div>
        </div>
      </div>
    </footer>
      
    )
}
export default Footer;