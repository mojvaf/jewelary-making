import React, { useState } from "react";
import "./nav.css";
import logo from "../../images/pearls.png";
import { useAppDispatch } from "../../redux/store";
import {
  FaHome,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAppSelector } from "../../redux/store";
import { logout } from "../../redux/slice/auth";
import { Link } from "react-router-dom";

interface ProjectProps {}

const Nav: React.FC<ProjectProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLogin = useAppSelector((store) => store.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  return (
    <header className={`header ${isOpen ? "nav-open" : ""}`}>
      <img src={logo} alt="jewelry logo" className="logo" />

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <Link to="/" className="main-nav-link">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/dashboard" className="main-nav-link">
              Projects
            </Link>
          </li>
          {!isLogin && (
            <li>
              <Link to="/register" className="main-nav-link">
                Register
              </Link>
            </li>
          )}
          <li>
            {isLogin ? (
              <span 
                className=""
                onClick={() => dispatch(logout())}
              >
                <FaSignOutAlt />
                <span>Log out</span>
              </span>
            ) : (
          <Link to="/login" className="main-nav-link">
                <FaSignInAlt /> <span>Log in</span>
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <button className="btn-mobile-nav" onClick={() => setIsOpen(!isOpen)}>
        <FaBars className="icon-mobile-nav" name="menu-outline" />
        <FaTimes className="icon-mobile-nav" name="close-outline" />
      </button>
    </header>
  );
};

export default Nav;
