// src/components/Footer.jsx
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import '../style/components/Footer.css';

const Footer = () => {
    return (
        <footer className="cnt-footer">
            <div className='footer-grid'>
                {/* Sección Logo y Nombre */}
                <div className='cnt-logoName'>
                    <img src="../../src/assets/Logotemporal.png" className='footer-logo' alt="Logo" />
                    <p className='textLogoFooter'>MiLogo</p>
                </div>

                {/* Sección Enlaces Rápidos */}
                <div className='footer-links-container'>
                    <ul className='ulLogo'>
                        <li className='liLogo'>
                            <a className='linkInternal' href="/">Home</a>
                        </li>
                        <li className='liLogo'>
                            <a className='linkInternal' href="/services">Services</a>
                        </li>
                        <li className='liLogo'>
                            <a className='linkInternal' href="/resources">Resources</a>
                        </li>
                        <li className='liLogo'>
                            <a className='linkInternal' href="/portfolio">Portfolio</a>
                        </li>
                    </ul>
                </div>

                {/* Sección Contacto */}
                <div className='cnt-contactUsFooter'>
                    <div className='cnt-btnFooterEmail'>
                        <p className="email">1GCConstruction@example.com</p>
                        <button className="contact-button">Contact Us</button>
                    </div>
                </div>

                {/* Sección Redes Sociales */}
                <div className='footer-social-container'>
                    <ul className="social-icons">
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram className="social-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook className="social-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <FaWhatsapp className="social-icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Sección Inferior (Políticas y Copyright) */}
            <div className='cnt-Polit'>
                <ul className='footer-policies'>
                    <li>
                        <a className='linkInternalPoliti' href="/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                        <a className='linkInternalPoliti' href="/terms-and-conditions">Terms and Conditions</a>
                    </li>
                </ul>
                <p className='text-resve'>All Rights Reserved © {new Date().getFullYear()} 1GCConstruction</p>
            </div>
        </footer>
    );
};

export default Footer;