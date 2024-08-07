import React from 'react';
import '../styles/Connect.css';
import { color } from 'chart.js/helpers';

const Connect = () => {
  return (
    <div className="connect-container">
      <h1 className="connect-container__header">Connect with Me</h1>
      <div className="connect-container__social-links">
        <a href="https://wa.me/+918474905343" className="connect-container__social-link" style={{ color: "green" }} target="_blank" rel="noreferrer">
          <i className="zmdi zmdi-whatsapp mdc-text-green"></i> WhatsApp
        </a>
        <a href="https://www.facebook.com/kaushalthelion" className="connect-container__social-link" style={{ color: "#0866ff" }}   target="_blank" rel="noreferrer">
          <i className="zmdi zmdi-facebook"></i> Facebook
        </a>
        <a href="https://github.com/kaushalkarki" className="connect-container__social-link" style={{ color: "black" }}target="_blank" rel="noreferrer">
          <i className="zmdi zmdi-github"></i> GitHub
        </a>
        <a href="mailto:kaushalsinghkarki@gmail.com" className="connect-container__social-link" style={{ color: "red" }}target="_blank" rel="noreferrer">
          <i className="zmdi zmdi-email"></i> Gmail
        </a>
        <a href="https://www.linkedin.com/in/kaushalkarki" className="connect-container__social-link" style={{color: "#0a66c2"}}target="_blank" rel="noreferrer">
          <i className="zmdi zmdi-linkedin"></i> LinkedIn
        </a>
        <a href="https://www.instagram.com/kaushalsinghkarki" className="connect-container__social-link" style={{ color: "purple" }}target="_blank" rel="noreferrer">
          <i className="zmdi zmdi-instagram"></i> Instagram
        </a>
      </div>
    </div>
  );
};

export default Connect;
