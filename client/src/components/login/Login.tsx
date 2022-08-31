import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { useAlert } from "../../hook/useAlert";
import { LoginRequestBody } from "../../models/auth";

const Login: React.FC = () => {
  const { showAlert, renderAlert } = useAlert();

  const [formData, setFormData] = useState<LoginRequestBody>({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const dispatch = useAppDispatch();

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newForm = {
      ...formData,
    };
    // @ts-ignore
    newForm[e.target.name] = e.target.value;
    setFormData(newForm);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="section-log">
      <div className="log-box">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="heading-secondary">Log in</h2>
          <div className="form-control">
            <label>Email</label>
            <input
              value={email}
              placeholder="Email"
              type="email"
              name="email"
              onChange={(e) => handelChange(e)}
              required
            />
            <small>Please enter your Email</small>
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              value={password}
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handelChange(e)} /*minLength="5"*/
            />
            <small>Please enter your password</small>
          </div>
          <button>Submit</button>
          <p className="my-1">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
