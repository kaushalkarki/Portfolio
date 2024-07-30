import React from 'react';
import '../styles/Skills.css';

import rubyLogo from '../images/ruby.jpeg';
import jsLogo from '../images/javascript.png';
import reactLogo from '../images/react.png';
import mysqlLogo from '../images/mysql.png';
import gitLogo from '../images/git.png';
import jiraLogo from '../images/jira.jpeg';
import aiLogo from '../images/ai.png';
import gcpLogo from '../images/gcp.png';
import cLogo from '../images/c.png';
import dockerLogo from '../images/docker.png';
import cert1 from '../images/Cert1.png';
import cert2 from '../images/Cert2.png';

const skillsData = [
  { name: 'Ruby on Rails', value: 80, logo: rubyLogo },
  { name: 'JavaScript', value: 70, logo: jsLogo },
  { name: 'React', value: 75, logo: reactLogo },
  { name: 'MySQL', value: 70, logo: mysqlLogo },
  { name: 'Git', value: 80, logo: gitLogo },
  { name: 'JIRA', value: 60, logo: jiraLogo },
  { name: 'Artificial Intelligence', value: 65, logo: aiLogo },
  { name: 'Google Cloud Platform', value: 60, logo: gcpLogo },
  { name: 'C/C++', value: 75, logo: cLogo },
  { name: 'Docker', value: 70, logo: dockerLogo },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <SkillTile key={index} skill={skill} />
        ))}
      </div>
      <h1>Certificates</h1>
      <div className="certificates-container">
        <img src={cert1} alt="cert1" className="cert-img" />
        <img src={cert2} alt="cert2" className="cert-img" />
      </div>
    </div>
  );
};

const SkillTile = ({ skill }) => {
  return (
    <div className="skill-tile">
      <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
      <span className="skill-name">{skill.name}</span>
    </div>
  );
};

export default Skills;
