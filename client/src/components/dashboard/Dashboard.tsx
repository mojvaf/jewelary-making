import React, { useState } from "react";
import "./dashboard.css";
import Projects from "../projects/Projects";
import list from "../../mock/projectList.json";

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState(list);
  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <section>
      <div className="project-container">
        <img src={currentProject.cover} alt={currentProject.name} />
        <h2>{currentProject.name}</h2>
        <h3>{currentProject.artist}</h3>
        <button>read more</button>
      </div>
      <Projects projects={projects} setCurrentProject={setCurrentProject} />
    </section>
  );
};

export default Dashboard;
