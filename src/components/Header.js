import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/skills' ? 'active' : ''}`}>
            <Link to="/skills">Skills</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/connect' ? 'active' : ''}`}>
            <Link to="/connect">Lets Connect</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;