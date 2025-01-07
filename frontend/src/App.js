// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TSP from './pages/TSP';

const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <NavBar language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/projects" element={<Projects language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="/tsp" element={<TSP />} />
      </Routes>
    </Router>
  );
};

export default App;
