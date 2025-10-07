"use client";

import React from "react";
import { Element } from "react-scroll";
import "../app/app.css";
import Navbar from "../components/Navbar";
import ScrollIndicator from "../components/ScrollIndicator";
import Homepage from "../pages/Homepage";
import About from "./skills";
import Projects from "./projects";

const Home = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Element name="home" id="home">
        <section className="section">
          <Homepage />
        </section>
      </Element>
      <Element name="skills" id="skills">
        <section className="section skills-section">
          <About />
        </section>
      </Element>
      <Element name="projects" id="projects">
        <section className="section projects-section">
          <Projects />
        </section>
      </Element>
      <Element name="contact" id="contact">
        <section className="section contact-section">
          <div style={{ padding: '120px 40px', textAlign: 'center' }}>
            <h2>Contact Me</h2>
            <p>Get in touch section coming soon!</p>
          </div>
        </section>
      </Element>
      <ScrollIndicator />
    </div>
  );
}

export default Home;
