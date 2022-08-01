import React from "react";
import "./nav.css";
import logo from "../../images/pearls.png";
import { FaHome, FaSignInAlt,FaBars,FaTimes } from 'react-icons/fa';
const Nav:React.FC = () => {
  return (
    <header className="header">  
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
      <button className="btn-mobile-nav">
        <FaBars className="icon-mobile-nav" name="menu-outline"/>
        <FaTimes className="icon-mobile-nav" name="close-outline"/>
      </button>
    </header>
  );
};

export default Nav;
