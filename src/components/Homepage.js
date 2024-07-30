import React from 'react';
import '../styles/Homepage.css';
import profilePic from '../images/profile.jpg'; // Add your profile picture in the assets/images folder

const Homepage = () => {
    return (
        <div className="homepage">
            <header className="header">
                <img src={profilePic} alt="Profile" className="profile-pic" />
                <h1>Kaushal Karki</h1>
                <p>Software Engineer</p>
            </header>
            <section className="about">
                <h2>About Me</h2>
                <p>
                    Hello, my name is Kaushal Karki. I am from Haldwani, Uttarakhand. I have done my graduation with a Bachelor of Science from Kumaun University Nainital in 2018. Currently, I am pursuing a Master in Computer Application from
                    <a className="text-decoration-none text-success" rel="noreferrer" href="https://www.gbpuat.ac.in/" target="_blank">
                        <u>Govind Ballabh Pant University of Agriculture and Technology</u>
                    </a>, Pantnagar.
                </p>
                <p>
                    I have done a 3-month <a className="text-decoration-none text-success" href="https://drive.google.com/file/d/1-Hwz_7DfOB835sjXlCXOYmO5RT3KvIAH/view?usp=sharing" target="_blank" rel="noreferrer"><u>Internship</u></a> at Grey Scientific Labs (work from home) from September 2021 to December 2021. During the internship, I worked on Front End Development using HTML, CSS, JavaScript, and ReactJS.
                </p>
                <p>
                    I am currently working as a Software Engineer at Maropost since March 2022, where I have developed RESTful APIs in Ruby on Rails, identified and resolved bugs in a production environment, created comprehensive RSpec test suites, detailed Swagger documentation for APIs, and wrote optimized SQL queries.
                </p>
            </section>
            <section className="projects">
                <h2>Projects</h2>
                <div className="project-cards">
                    <div className="project-card">
                        <h3>Project 1</h3>
                        <p>Short description of project 1.</p>
                    </div>
                    <div className="project-card">
                        <h3>Project 2</h3>
                        <p>Short description of project 2.</p>
                    </div>
                    <div className="project-card">
                        <h3>Project 3</h3>
                        <p>Short description of project 3.</p>
                    </div>
                </div>
            </section>
            <section className="contact">
                <h2>Contact</h2>
                <p>Email: kaushalsinghkarki@gmail.com</p>
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
            </section>
        </div>
    );
}

export default Homepage;
