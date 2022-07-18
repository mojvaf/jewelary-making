import React from "react";
import "./footer.css";
import logo from '../../images/pearls.png'
import { FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';
const Footer:React.FC = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="/" className="footer-log">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <ul className="social-links">
            <li>
              <a className="footer-link" href="/">
                <FaFacebook/>
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
              <FaInstagram/> 
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                <FaTwitter/>
              </a>
            </li>
          </ul>
          <p className="copyright">
            Copyright &copy; 2022 by Jewelry shop, All rights reserved.
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              Address: 200 main St., 2nd Floor, New York 94107
            </p>
            <p>
              <a href="tel:415-201-6370" className="footer-link">
                415-201-6370
              </a>
              <br />
              <a href="mailto:hello@omnifood.com" className="footer-link">
                hello@shop.com
              </a>
            </p>
          </address>
        </div>
        <div className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="/">
                Create account
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="/">
                About our shop
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="/">
                Help center
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
