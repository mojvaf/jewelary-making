import React, { useState } from "react";
import "./dashboard.css";
import Projects from "../projects/Projects";
import list from "../../util";

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState(list());
  const [currentProject, setCurrentProject] = useState(projects[0]);

  
 
 const handelChangeProject=()=>{
  
 }
  return (
    <section>
      <div className="project-container">
        <img src={currentProject.cover} alt={currentProject.name} />
        <h2>{currentProject.name}</h2>
        <h3>{currentProject.artist}</h3>
        <button>read more</button>
      </div>
      <div className="library">
        <h2>List of projects</h2>
        {projects.map((project) => (
          <div  className={`library-list ${project.active ? 'selected' : ''}`}>
            <img className="img" src={project.cover} alt={project.artist} />
            <div className="library-description">
              <h3>{project.name}</h3>
              <h4>{project.artist}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
