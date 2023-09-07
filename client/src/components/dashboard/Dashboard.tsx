import React, { useState } from "react";
import "./dashboard.css";
import list from "../../mock/projectList.json";
import ProjectNav from "../projectNav/ProjectNav";
import Projects from "../projects/Projects";

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState(list);
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [toggleProject, setToggleProject] = useState(false);
  //
  return (
    <section className={`dashboard ${toggleProject ? "section_padding" : ""} `}>
      <ProjectNav
        toggleProject={toggleProject}
        setToggleProject={setToggleProject}
      />
      <div className="project-container">
        <img src={currentProject.cover} alt={currentProject.name} />
        <h2>{currentProject.name}</h2>
        <h3>{currentProject.artist}</h3>
      </div>
      <Projects
        projects={projects}
        setCurrentProject={setCurrentProject}
        setProjects={setProjects}
        toggleProject={toggleProject}
      />
    </section>
  );
};

export default Dashboard;
