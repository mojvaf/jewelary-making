import React from 'react'
import './projectNav.css'
import { FaListOl } from 'react-icons/fa';

interface ProjectProps {
  toggleProject: boolean
  setToggleProject:(data:boolean)=>void
}

const ProjectNav: React.FC<ProjectProps> = ({toggleProject,setToggleProject}) => {
  return (
    <nav className='project-nav'>
        <p className='heading-tertiary'>About the project</p>
        <button className='btn' onClick={()=>setToggleProject(!toggleProject)}>
            Lists{' '}
            <FaListOl/>
        </button>
    </nav>
  )
}

export default ProjectNav