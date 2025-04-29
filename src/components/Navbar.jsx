// src/components/Navbar.jsx
import { useState } from 'react';
import '../style/components/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className="navbar">
                {/* Botón del menú hamburguesa */}
                <button className="navbar-toggle" onClick={toggleMenu}>
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Menú desplegable */}
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        <li>
                            <a href="/resources">Resources</a>
                        </li>
                        <li>
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="/quote">Quote</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-logo">MiLogo</div>
            </nav>
        </header>
    );
};

export default Navbar;