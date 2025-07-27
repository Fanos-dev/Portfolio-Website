import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import Orbs from './Orbs';

const Portfolio = () => {
  return (
    <div className="relative">
      {/* Global animated orb */}
      <Orbs />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;