"use client";

import { Link } from "react-scroll";
import profile from "../../../public/profile.png"
import "./homepage.css"

export default function Homepage() {
    return (
        <div className="homepage">
            <div className="hero-content">
                <div className="text-section">
                    <div className="greeting">
                        <span className="wave">👋</span>
                        <span>Hi there, I'm</span>
                    </div>
                    <h1 className="name">Tochi Abara</h1>
                    <div className="roles">
                        <span className="role-text">Software Engineer</span>
                        <span className="divider">•</span>
                        <span className="role-text">Mobile Engineer</span>
                    </div>
                    <p className="description">
                        I'm a multi-faceted engineer who enjoys building complex software solutions with robust backend infrastructures. I actively participate in the full development cycle; designing, building, testing, and deploying high-quality systems.
                    </p>

                    <div className="cta-buttons">
                        <Link 
                            to="contact" 
                            smooth={true} 
                            duration={500}
                            className="primary-btn"
                        >
                            Let's Connect
                        </Link>
                        <Link 
                            to="projects" 
                            smooth={true} 
                            duration={500}
                            className="secondary-btn"
                        >
                            View My Work
                        </Link>
                    </div>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/tochiabara-3011371b4/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                        <a href="https://github.com/tochiveraabara" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                    </div>
                </div>
                <div className="image-section">
                    <div className="profile-wrapper">
                        <img className="profile" src={profile.src} alt="Tochi Abara" />
                        <div className="profile-bg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
