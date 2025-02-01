import React from 'react';

const Project = () =>{

    return (
        <>
       <div className="skills-container">
      <h1>Projects</h1>
      <div className="skills-list">
        <SkillTile  />
      </div>
    </div>
        </>
    )
}
const SkillTile = ({ skill }) => {
    return (
        <>
      <div className="skill-tile">
        {/* <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" /> */}
        <span className="skill-name" >
        <a href="https://weather-app-five-navy.vercel.app/" className="skill-name" target="_blank" rel="noopener noreferrer">
            Weather App</a> 
        </span>
        
      </div>
       <div className="skill-tile">
       {/* <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" /> */}
       <span className="skill-name" >
       <a href="https://todo-list-1sp0lsm20-kaushalkarki.vercel.app/" className="skill-name" target="_blank" rel="noopener noreferrer">
           To Do List</a> 
       </span>
     </div>
       <div className="skill-tile">
       {/* <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" /> */}
       <span className="skill-name" >
       <a href="" className="skill-name" target="_blank" rel="noopener noreferrer">
           Splits App</a><h6><b>private</b></h6> 
       </span>
     </div>
      <div className="skill-tile">
      {/* <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" /> */}
      <span className="skill-name" >
      <a href="" className="skill-name" target="_blank" rel="noopener noreferrer">
          Job Portal</a><h6><b>private</b></h6>  
      </span>
    </div>
     </>
    );
  };

export default Project;