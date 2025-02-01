import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* <h1>About Me</h1> */}
      <div className="about-section">
        <h2>Introduction</h2>
        <p>
        Hello! I'm Kaushal Karki, a results-driven Software Engineer with over 3 years of experience crafting scalable, high-performance applications. My passion lies in solving complex problems, optimizing systems, and building intuitive user experiences. I thrive in fast-paced environments, leveraging cutting-edge technologies to develop efficient, maintainable, and future-proof solutions.
        With a strong foundation in Ruby on Rails, React, and cloud-based architectures, I specialize in creating seamless, high-quality applications that enhance business efficiency. I’m committed to continuous learning, writing clean, test-driven code, and collaborating with teams to drive innovation and excellence.
        </p>
      </div>
      <div className="about-section">
        <h2>Education</h2>
        <p>
        I hold a Master of Computer Applications (MCA) from Govind Ballabh Pant University of Agriculture & Technology, where I built a strong foundation in computer science principles, software engineering, and problem-solving. During my time there, I actively engaged in projects, internships, and leadership roles, further refining my technical expertise and collaboration skills.
        Prior to that, I earned my Bachelor of Science (B.Sc.) in Physics, Chemistry, and Mathematics from Kumaun University, Nainital. This interdisciplinary background has honed my analytical thinking, logical reasoning, and structured problem-solving approach, which I apply daily in software development.
        </p>
      </div>
      <div className="about-section">
        <h2>Professional Background</h2>
        <p>
        With over 3 years of experience as a Software Engineer, I have honed my skills in backend and full-stack development, specializing in Ruby on Rails, React.js, and scalable API architectures.
        At Maropost, I played a pivotal role in designing, developing, and optimizing RESTful APIs, ensuring high performance, security, and scalability. I spearheaded efforts to enhance database efficiency, reducing query execution time by 40%, and implemented robust RSpec test suites to maintain 90%+ test coverage. My contributions in code reviews, architectural decisions, and AI-powered integrations significantly improved product quality and business efficiency.
        As a React Intern at Grey Scientific Labs, I built modular, reusable frontend components, improved state management, and optimized application performance for a seamless user experience.
        My experience has taught me the importance of writing clean, maintainable code, collaborating in cross-functional teams, and continuously learning to stay ahead of industry trends.
        </p>
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
