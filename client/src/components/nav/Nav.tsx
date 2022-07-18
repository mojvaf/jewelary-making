import React from "react";
import "./nav.css";
import logo from "../../images/pearls.png";
import { FaHome, FaSignInAlt } from 'react-icons/fa';
const Nav:React.FC = () => {
  return (
    <header className="header">
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li> <a href="/app/home">
        {" "}
        <img src={logo} alt="jewelry logo" className="logo" />
      </a></li>
          <li> <a href="/dashboard" className="main-nav-link">
                Projects
            </a></li>
        </ul>
      </nav>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="/" className="main-nav-link">
              <FaHome />  Home
            </a>
          </li>
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
    </header>
  );
};

export default Nav;
