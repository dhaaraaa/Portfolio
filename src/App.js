// src/App.js
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/Aboutme';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Resume from './Component/Resume';
import Details from './Component/Details';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'Home':
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'About':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Academic':
        resumeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Projects':
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
    
  };

  
  return (
    <Router>
      <Navbar scrollToSection={scrollToSection} />
      <Routes>
        <Route path="/" element={
          <div>
            <div ref={homeRef}><Home scrollToSection={scrollToSection} /></div>
            <div ref={aboutRef}><About /></div>
            <div ref={resumeRef}><Resume /></div>
            <div ref={projectsRef}><Projects /></div>
            <div ref={contactRef}><Contact /></div>
          </div>
        } />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
