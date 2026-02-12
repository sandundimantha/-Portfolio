import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import YouTubeGallery from './components/YouTubeGallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <YouTubeGallery />
      <Contact />
    </div>
  );
}

export default App;
