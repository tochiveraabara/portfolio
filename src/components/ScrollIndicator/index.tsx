"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./scrollIndicator.css";

const ScrollIndicator = () => {
    const [currentSection, setCurrentSection] = useState('home');

    const sections = [
        { id: 'home', name: 'Home' },
        { id: 'skills', name: 'Skills' },
        { id: 'projects', name: 'Projects' },
        { id: 'contact', name: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section && scrollPosition >= section.offsetTop) {
                    setCurrentSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getCurrentIndex = () => sections.findIndex(section => section.id === currentSection);
    const currentIndex = getCurrentIndex();
    const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;
    const isLastSection = currentIndex === sections.length - 1;

    if (isLastSection) {
        return (
            <div className="scroll-indicator">
                <div className="scroll-text">Thanks for visiting!</div>
                <div className="scroll-arrow completed">✓</div>
            </div>
        );
    }

    if (!nextSection) return null;

    const getNextSectionText = (next: string) => {
        switch (next) {
            case 'skills':
                return 'Explore my skills';
            case 'projects':
                return 'View my projects';
            case 'contact':
                return 'Get in touch';
            default:
                return 'Continue exploring';
        }
    };

    return (
        <Link
            to={nextSection.id}
            smooth={true}
            duration={500}
            className="scroll-indicator clickable"
            role="button"
            aria-label={`Scroll to ${nextSection.name} section`}
        >
            <div className="scroll-text">{getNextSectionText(nextSection.id)}</div>
            <div className="scroll-arrow">↓</div>
        </Link>
    );
};

export default ScrollIndicator;