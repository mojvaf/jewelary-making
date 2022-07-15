import React, { useState } from "react";
import "./register.css";
import { useAppDispatch } from "../../redux/store";
import { register } from "../../redux/slice/auth";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    last: "",
    email: "",
    password: "",
  });

  const { name, last, email, password } = formData;
  
  const dispatch = useAppDispatch();

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newForm = {
      ...formData,
    };
    // @ts-ignore
    newForm[e.target.name] = e.target.value;
    setFormData(newForm);
  };

  const handleSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const body = {
      name: formData.name,
      last: formData.last,
      email: formData.email,
      password:formData.password
    }
     dispatch(register(body))
  }

  return (
    <div className="section-register">
      <div className="register-box">
        <h2 className="register-text">Add Your Name</h2>
        <p className="register-description">
          Sign up here to receive updates about our projects and ways to get
          involved.
        </p>
        <form className="form-register" onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Name</label>
            <input
              placeholder="Name*"
              value={name}
              name="name"
              onChange={(e) => handelChange(e)}
            />
            <small>Please enter your name</small>
          </div>
          <div className="form-control">
            <label>Last name</label>
            <input
              placeholder="Last Name"
              name="last"
              value={last}
              onChange={(e) => handelChange(e)}
            />
            <small>Please enter your last name</small>
          </div>
          <div className="form-control email">
            <label>Email</label>
            <input
              placeholder="Email*"
              name="email"
              value={email}
              onChange={(e) => handelChange(e)}
            />
            <small>Please enter your Email</small>
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password*"
              value={password}
              name="password"
              onChange={(e) => handelChange(e)}
            />
            <small>Please enter your password</small>
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
      </div>
      <a href="/" className="btn btn-register">
        go back
      </a>
    </div>
  );
};

export default Register;
