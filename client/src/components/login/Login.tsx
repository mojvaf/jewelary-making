import React from "react";
import './login.css'

const Login:React.FC = () => {
  return <div className="section-log">
  <div className="log-box">
    <form className="form">
      <h2 className="heading-secondary">Log in</h2>
      <div className="form-control">
        <label>Name</label>
        <input  placeholder="Name"/>
        <small>Please enter your name</small>
      </div>
      <div className="form-control">
        <label>Email</label>
        <input  placeholder="Email"/>
        <small>Please enter your Email</small>
      </div>
      <div className="form-control">
        <label>Password</label>
        <input placeholder="Password"/>
        <small>Please enter your password</small>
      </div>
      <button>Submit</button>
    </form>
  </div>
</div>;
};

export default Login;
