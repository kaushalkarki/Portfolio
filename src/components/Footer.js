import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Kaushal Karki. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/kaushalkarki" target="_blank" rel="noreferrer">
            <i className="zmdi zmdi-linkedin"></i>
          </a>
          <a href="https://github.com/kaushalkarki" target="_blank" rel="noreferrer">
            <i className="zmdi zmdi-github-alt"></i>
          </a>
          <a href="https://www.hackerrank.com/kaushalkarki20" target="_blank" rel="noreferrer">
            <i className="zmdi zmdi-code"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
