import React from 'react'
import Main from '../Component/Header/Main';
import About from '../Component/About/About';
import Education from '../Component/Education/Education';
import Skills from '../Component/Skills/Skills';
import Project from "../Component/Project/Project";
import Certifications from '../Component/Certifications/Certifications';
import Contact from '../Component/Contact/Contact';
import Footer from '../Component/Footer/Footer';
import './Portfolio.css';

function Portfolio() {
  return (
    <div>
      <Main/>
      <About />
      <Education/>
      <Skills />
      <Project />
      <Certifications />
      <Contact/>
      <Footer />     
       </div>
  )
}

export default Portfolio