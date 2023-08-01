import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';
import "../Footer.css";

function Footer(){
    return(
       <section>
        <div className="contact-container">
          <div className="contactInfo">
            <div>
              <h2>Contact Info</h2>
              <ul className="info">
                <li>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: '#fff' }} size="lg" />
                <span>codespresso@gmail.com</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faPhone} style={{ color: '#fff' }} size="lg" />
                <span>+27 73 654 7890</span>
                </li>
                <li>
                <FontAwesomeIcon icon={faLocation} style={{ color: '#fff' }} size="lg" />
                <span>23 Code Avenue, Central Plaza</span>
                </li>
              </ul>
            </div>
            <ul className="sci">
              <li><FontAwesomeIcon icon={faTwitter} style={{ color: '#fff' }} size="lg" /></li>
              <li><FontAwesomeIcon icon={faFacebook} style={{ color: '#fff' }} size="lg" /></li>
              <li><FontAwesomeIcon icon={faInstagram} style={{ color: '#fff' }} size="lg" /></li>
              <li><FontAwesomeIcon icon={faPinterest} style={{ color: '#fff' }} size="lg" /></li>
            </ul>
            </div>
            <div className="contactForm">
              <h2>Send a Message</h2>
              <div className ="formBox">
              <div className="inputBox w50">
                <input type="text" required/>
                <span>First Name</span>
              </div>
              <div className="inputBox w50">
                <input type="text" required/>
                <span>Last Name</span>
              </div>
              <div className="inputBox w50">
                <input type="email" required/>
                <span>Email Address</span>
              </div>
              <div className="inputBox w50">
                <input type="text" required/>
                <span>Cellphone Number</span>
              </div>
              <div className="inputBox w100">
               <textarea required/>
                <span>Write your message here...</span>
              </div>
              <div className="inputBox w100">
                <input type ="submit" value="Send"/>
              </div>
              </div>
    
          </div>
          </div>
        </section>
    )
}
export default Footer;