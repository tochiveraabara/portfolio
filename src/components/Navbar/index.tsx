
"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../../public/logo.png"
import "./navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <img className="logo" src={logo.src} alt="logo" />
            <nav className="navbar">
                <ul className={`navLink ${isOpen ? 'active' : ''}`}>
                    <li>
                        <Link 
                            to="home" 
                            smooth={true} 
                            duration={500}
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="skills" 
                            smooth={true} 
                            duration={500}
                            onClick={() => setIsOpen(false)}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="projects" 
                            smooth={true} 
                            duration={500}
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="contact" 
                            smooth={true} 
                            duration={500}
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="mobile-menu-btn" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;