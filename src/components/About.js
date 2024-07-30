import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* <h1>About Me</h1> */}
      <div className="about-section">
        <h2>Introduction</h2>
        <p>
          Hello! I'm Kaushal Karki, a passionate and dedicated software engineer with over 2.5 years of experience in the industry. My journey in software development has been driven by a love for solving complex problems and creating efficient, user-friendly applications.
        </p>
      </div>
      <div className="about-section">
        <h2>Education</h2>
        <p>
          I graduated from Govind Ballabh Pant University of Agriculture & Technology with a degree in MCA, where I developed a strong foundation in computer science principles and software engineering practices. My time at university was filled with various projects, internships, and research opportunities that fueled my passion for technology.
        </p>
      </div>
      <div className="about-section">
        <h2>Professional Background</h2>
        <p>
          After graduation, I started my career as an Intern at Grey Scientic Labs, where I worked as React developer. This experience taught me the importance of writing clean, maintainable code and collaborating effectively with cross-functional teams.
        </p>
        <p>
          Currently, I am working at Maropost, where I specialize in full-stack development with a focus on Ruby on Rails and React. Some of my notable projects include:
        </p>
        <ul>
          <li>Developed sophisticated segments using OpenAI's fine-tuning capabilities, enhancing user engagement and personalization.</li>
          <li>Designed and implemented a dynamic email content rendering service in Golang, improving the efficiency of marketing campaigns.</li>
          <li>Resolved critical issues in an expense management application, ensuring data integrity and enhancing the user experience.</li>
        </ul>
      </div>
      <div className="about-section">
        <h2>Hobbies and Interests</h2>
        <p>
          Outside of work, I am an avid reader and enjoy exploring new technologies and participating in hackathons. I also love hiking and spending time in nature, which helps me recharge and stay inspired. My hobbies include:
        </p>
        <ul>
          <li>Chess</li>
          <li>Table Tennis</li>
          <li>Solving Puzzles</li>
          <li>Exploring new technologies</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
