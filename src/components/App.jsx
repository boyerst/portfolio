import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Tech from './Tech/Tech';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, techData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [tech, setTech] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setTech([...techData]);
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  console.log("techData in App.js: ", techData)
  console.log("tech in App.js: ", tech)

  return (
    <PortfolioProvider value={{ hero, about, tech, projects, contact, footer }}>
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
