import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import Confirmation from './components/form-components/Confirmation';

library.add(fab, faInstagram, faFacebook, faLinkedin, faTwitter, faTiktok, faYoutube)

function Footer() {
    return(
        <footer>
            <nav id="footer-nav">
                <h1>Menu</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Cats">Cats</a></li>
                    <li><a href="/Dogs">Dogs</a></li>
                    <li><a href="/Birds">Birds</a></li>
                    <li><a href="/Sitemap">Sitemap</a></li>
                    <li><a href="#">Top</a></li>
                </ul>
            </nav>

            <section id="footer-contact">
                <h1>Contact Us</h1>

                <div>
                    <form action="/Confirmation">
                        <div class="footer-form-item">
                            <label for="fname" name="fname" class="footer-label">First Name: </label> 
                            <input class="footer-input" type="text" name="fname" minlength="2" maxlength="500" required></input>
                        </div>

                        <div class="footer-form-item">
                            <label for="lname" name="lname" class="footer-label">Last Name:</label>
                            <input class="footer-input"  type="text" name="lname" minlength="2" maxlength="500" required></input>
                        </div>

                        <div class="footer-form-item">
                            <label for="email" name="email" class="footer-label">E-Mail:</label>
                            <input class="footer-input"  type="email" name="email" minlength="10" maxlength="500" required></input>
                        </div>

                        <div class="footer-form-item">
                            <label for="message" name="message" class="footer-label">Message: </label>
                            <textarea class="footer-input" name="message" minlength="10" maxlength="500" required></textarea>
                        </div>

                        <div>
                        <label for="submit" name="submit">
                            <input type="submit" value="Submit" class="footer-button"></input>
                        </label>
                        </div>
                    </form>
                </div>
            </section>

            <section id="footer-follow">
                <h1>Follow Us</h1>

                <ul id="social-icons">
                    <li class="social-item"><a href="https://www.instagram.com" target="_blank" title="Follow Us on Instagram"><FontAwesomeIcon icon={faInstagram} size="lg" /></a></li>
                    <li class="social-item"><a href="https://www.linkedin.com" target="_blank" title="Follow Us on LinkedIn"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></li>
                    <li class="social-item"><a href="https://www.facebook.com" target="_blank" title="Follow Us on Facebook"><FontAwesomeIcon icon={faFacebook} size="lg" /></a></li>
                    <li class="social-item"><a href="https://www.twitter.com" target="_blank" title="Follow Us on Twitter"><FontAwesomeIcon icon={faTwitter} size="lg" /></a></li>
                    <li class="social-item"><a href="https://www.tiktok.com" target="_blank" title="Follow Us on TikTok"><FontAwesomeIcon icon={faTiktok} size="lg" /></a></li>
                    <li class="social-item"><a href="https://www.youtube.com" target="_blank" title="Subscribe to Our YouTube Channel"><FontAwesomeIcon icon={faYoutube} size="lg" /></a></li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;