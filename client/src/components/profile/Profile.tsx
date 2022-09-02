import React from "react";
import Nav from "../nav/Nav";
import "./profile.css";
import bangles from "../../images/bangles.jpg";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Profile = () => {
  return (
    <section>
      <Nav />
      <h1 className="heading-secondary">Your name</h1>
      <div className="profile-carousel">
        <img src={bangles} alt="bangles" className="profile-img" />
        <div className="profile-testimonial">
          <p className="profile-testimonial-text">Hello</p>
          <p className="profile-testimonial-text">HhHHh</p>
          <p className="profile-testimonial-text">hlkdfhslkdfhlsf</p>
          <button className="btn-profile btn-left">
            <FaArrowAltCircleLeft className="profile-icon"/>
          </button>
          <button className="btn-profile btn-right">
            <FaArrowAltCircleRight className="profile-icon"/>
          </button>
          <div className="dots">
            <div className="dot dot-white"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
