import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import Skills from './components/Skill';
import About from './components/About';
import Footer from './components/Footer';
import Connect from './components/Connect';
import Project from './components/Project';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
