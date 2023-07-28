import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';


function Footer(){
    return(
        <div>
            <img src="/receipe-book/public/imgs/Elegant Coffee Shop Logo .png" alt="Codespresso Logo"></img>
            <span>Coffee Creations For Coders</span>
            <h3 className="subscribe">Subscribe Now</h3>
            <input type="email" className="email"></input>
            <button className="subscribe-btn">Subscribe</button>
            <div className="info">
            <h3>Information</h3>
            <a href="about-us">About Us</a>
            <a href="receipes">Receipes</a>
            <a href="detailed-receipes">Detailed Receipes</a>
            </div>
            <div className="services">
            <h3>Our Services</h3>
            <span>Craft the perfect receipes</span>
            <span></span>
            <span></span>
            </div>
            
                <div>
                    <h3>Contact Us</h3>
                    <FontAwesomeIcon icon={faPhone} style={{ color: '#ddab70' }} size="xl" />
      <span>+21 345 6754</span>

      <FontAwesomeIcon icon={faEnvelope} style={{ color: '#ddab70' }} size="xl" />
      <span>@gmail.com</span>

      <FontAwesomeIcon icon={faInstagram} style={{ color: '#ddab70' }} size="xl" />
    
      
      <FontAwesomeIcon icon={faTwitter} style={{ color: '#ddab70' }} size="xl" />
   
      
      <FontAwesomeIcon icon={faFacebook} style={{ color: '#ddab70' }} size="xl" />
    
    </div>
                </div>
      
    )
}
export default Footer;