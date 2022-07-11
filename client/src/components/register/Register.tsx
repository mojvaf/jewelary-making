import React from "react";
import "./register.css";
const Register = () => {
  return (
    <div className="section-register">
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
            <input placeholder="Password"/>
            <small>Please enter your password</small>
          </div>
          <div className="form-control">
            <label>re-inter your Password</label>
            <input />
            <small>Please re-enter your password</small>
          </div>
          <button>Submit</button>
        </form>
      </div>
      <a href="/app" className="btn btn-register">go back</a>
    </div>
  );
};

export default Register;
