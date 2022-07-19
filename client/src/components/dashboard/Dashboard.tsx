import React, { useState } from "react";
import "./dashboard.css";
import Projects from "../projects/Projects";
import list from "../../util";

const Dashboard:React.FC = () => {
  const [projects, setProjects] = useState(list());
  const [currentProject, setCureentProject] = useState(projects[3]);
  return (
    <div className="ca">
      {projects.map((project)=> 
      <div className="grid">
        <h1>{project.artist}</h1>
        <img className="imgo" src={project.cover} alt={project.artist}/>
      </div>)}
    </div>
  );
};

export default Dashboard;
