import React from 'react'
import './projectNav.css'
import { FaListOl } from 'react-icons/fa';

interface ProjectProps {
  toggleProject: boolean
  
}

const ProjectNav: React.FC<ProjectProps> = ({toggleProject}) => {
  return (
    <nav className='project-nav'>
        <p className='heading-tertiary'>About the project</p>
        <button className='btn'>
            Lists{' '}
            <FaListOl/>
        </button>
    </nav>
  )
}

export default ProjectNav