import React from "react";
import "./register.css";
import bangles from "../../images/bangles.jpg";

const Register = () => {
  return (
    <div className="section-register">
      <div></div>
      <div className="register-box">
        <form className="form">
          <h2 className="heading-secondary">Register with us</h2>
          <div className="form-control">
            <label>Name</label>
            <input />
            <small>Please enter your name</small>
          </div>
          <div className="form-control">
            <label>Last name</label>
            <input />
            <small>Please enter your last name</small>
          </div>
          <div className="form-control">
            <label>Email</label>
            <input />
            <small>Please enter your Email</small>
          </div>
          <div className="form-control">
            <label>Password</label>
            <input placeholder="Password" />
            <small>Please enter your password</small>
          </div>
          <div className="form-control">
            <label>re-inter your Password</label>
            <input />
            <small>Please re-enter your password</small>
          </div>
          <div className="form-control">
            <label>Where did you hear from us</label>
            <select>
              <option value="">Please choose an option:</option>
              <option value="friends">Friends and family</option>
              <option value="youTube">YouTube</option>
              <option value="facebook">Facebook</option>
            </select>
          </div>
          <button>Submit</button>
        </form>
        <img src={bangles} alt="bangles" />
      </div>
      <a href="/" className="btn btn-register">
        go back
      </a>
    </div>
  );
};

export default Register;
