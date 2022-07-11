import React from "react";
import "./nav.css";
import logo from "../../images/pearls.png";

const Nav = () => {
  return (
    <header className="header">
      <a href="/app/home">
        {" "}
        <img src={logo} alt="jewelry logo" className="logo" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="/app" className="main-nav-link">Home</a>
          </li>
          <li>
            <a href="/register" className="main-nav-link">Register</a>
          </li>
          <li>
            <a href="/login" className="main-nav-link">log in</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
