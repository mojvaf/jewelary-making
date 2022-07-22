import React from "react";
import { Project } from "../../util";
import "./project.css";

interface ProjectsProps {
  projects: Project[];
  setCurrentProject: (data: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, setCurrentProject }) => {
  const handleChange = (project: Project) => {
    setCurrentProject(project);
  };

  return (
    <div className="library">
      <h2>List of projects</h2>
      {projects.map((project) => (
        <div
          onClick={() => handleChange(project)}
          className={`library-list ${project.active ? "selected" : ""}`}
        >
          <div
            className="img"
            style={{ backgroundImage: `url(${project.cover})` }}
          />
          <div className="library-description">
            <h3>{project.name}</h3>
            <h4>{project.artist}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
