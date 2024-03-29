import React from "react";
import "./profile.css";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp
} from "react-icons/fa";


const Profile = () => {
  return (
    <section className="grid profile-container">
      <div className="profile-header">
        In this part we are going to add image of the user and the name
      </div>
      <article className="profile-article">This part is about news</article>
      <aside className="profile-aside">
        <div className="profile-item open">
          <p className="profile-number">01</p>
          <p className="profile-text">Do you want to invite friends?</p>
          <FaArrowAltCircleUp className="profile-icon"/> 
          <div className="profile-hidden-box">
             <p>let us know</p>
             <ul>
              <li>lerem</li>
              <li>lerem</li>
             </ul>
          </div>
        </div>
        <div className="profile-item">
          <p className="profile-number">02</p>
          <p className="profile-text">What are new incoming projects?</p>
          <FaArrowAltCircleDown className="profile-icon"/> 
          <div className="profile-hidden-box">
             
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Profile;
