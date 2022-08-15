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
            <a href="/" className="main-nav-link">
              <FaHome /> Home
            </a>
          </li>
          <li>
            {" "}
            <a href="/dashboard" className="main-nav-link">
              Projects
            </a>
          </li>
          {!isLogin && (
            <li>
              <a href="/register" className="main-nav-link">
                Register
              </a>
            </li>
          )}
          <li>
            {isLogin ? (
            
               <a href="#" className="main-nav-link">
                <FaSignOutAlt onClick={() => dispatch(logout())} />
                <span>Log out</span>
                </a>
            ) : (
              <a href="/login" className="main-nav-link">
                <FaSignInAlt /> <span>Log in</span>
              </a>
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
