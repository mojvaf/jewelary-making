import React, { useState } from "react";
import "./nav.css";
import logo from "../../images/pearls.png";
import { FaHome, FaSignInAlt,FaBars,FaTimes } from 'react-icons/fa';

interface ProjectProps {
  isOpen: boolean
  setIsOpen:(data:boolean)=>void
}

const Nav:React.FC<ProjectProps> = () => {
  const [isOpen,setIsOpen]= useState(false) 

  return (
    <header className={`header ${isOpen? "nav-open" : "" }`}>  
        <img src={logo} alt="jewelry logo" className="logo" />

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="/" className="main-nav-link">
              <FaHome />  Home
            </a>
          </li>
          <li> <a href="/dashboard" className="main-nav-link">
                Projects
            </a></li>
          <li>
            <a href="/register" className="main-nav-link">
              Register
            </a>
          </li>
          <li>
            <a href="/login" className="main-nav-link">
               <FaSignInAlt/> log in
            </a>
          </li>
        </ul>
      </nav>
      <button className="btn-mobile-nav" onClick={()=>setIsOpen(!isOpen)}>
        <FaBars className="icon-mobile-nav" name="menu-outline"/>
        <FaTimes className="icon-mobile-nav" name="close-outline"/>
      </button>
    </header>
  );
};

export default Nav;
