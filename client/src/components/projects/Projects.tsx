import React from "react";
import { Project } from "../../util";
import './project.css'
interface ProjectsProps {
  projects: Project[];
  setCurrentProject: (data: Project) => void;
  setProjects:(data:Project[])=>void
  toggleProject: boolean
}

const Projects: React.FC<ProjectsProps> = ({ projects, setCurrentProject,setProjects,toggleProject }) => {
  const handleChange = (project: Project) => {
    setCurrentProject(project);
    // eslint-disable-next-line array-callback-return
    const newProject = projects.map((item:Project)=> {
      if(item.id === project.id){
        return {
          ...item,
          active:true
        }
      }else{
        return{
          ...item,
          active:false
        }
      }
    })
    setProjects(newProject)
  };

  return (
    <div className={`library ${toggleProject ? 'active-library': ''}`}>
      <h2>List of projects</h2>
      {projects.map((project) => (
        <div
          onClick={() => handleChange(project)}
          className={`library-list ${project.active ? "selected" : ""}`}
          key={project.id}
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
