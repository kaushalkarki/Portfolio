import React from 'react';
import '../styles/Home.css';
import resume from '../images/Resume.pdf';
import profileImage from '../images/profile.jpg'; // Make sure to add your profile image here

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro">
        <img src={profileImage} alt="Kaushal Karki" className="profile-image" />
        <h1 className="name">Kaushal Karki</h1>
        <p className="tagline">Software Engineer | Ruby on Rails Developer | React Developer</p>
        <a href={resume} download className="download-button">Download Resume</a>
      </div>
      <div className="animation-container">
        <div className="animation-box bounce">
          <i className="fas fa-code"></i>
          <p>Full Stack Development</p>
        </div>
        <div className="animation-box slide">
          <i className="fas fa-laptop-code"></i>
          <p>Web Development</p>
        </div>
        <div className="animation-box fade">
          <i className="fas fa-mobile-alt"></i>
          <p>Mobile Development</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
