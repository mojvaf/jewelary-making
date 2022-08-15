import React, { useState } from "react";
import "./register.css";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { login } from "../../redux/slice/auth";
import { setAlert, removeAlert } from "../../redux/slice/alert";
import { AuthService } from "../../service/auth.service";
import { RegisterRequestBody } from "../../models/auth";


const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterRequestBody>({
    name: "",
    last: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, last, email, password, confirmPassword } = formData;

  const dispatch = useAppDispatch();
  const alerts = useAppSelector((store) => store.alert.alert);

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
    if (password !== confirmPassword){ 
    
      dispatch(
        setAlert({
          msg: "Passwords do not match ",
          alertType: "danger",
        })
      );
      /*setTimeout(() => {
        dispatch(removeAlert());
      }, 2000);*/
            dispatch(removeAlert);
      } else {
      const body: RegisterRequestBody = {
        name: formData.name,
        last: formData.last,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };
      AuthService.register(body)
        .then((res) => {
          dispatch(login({ token: res.data.token }));
        })
        .catch((err) => {
          //showAlert(err.response.data.msg);
        });
      /*dispatch(login(body));
      dispatch(
        setAlert({
          msg: "You have successfully singed up",
          alertType: "success",
        })
      );*/
    }
  };

  return (
    <div className="section-register">
      <div className="register-box">
        <h2 className="register-text">Add Your Name</h2>
        <p className="register-description">
          Sign up here to receive updates about our projects and ways to get
          involved.
        </p>
         {alerts !== null &&
          alerts.length > 0 &&
          alerts.map((item) => (
            <div key={item.id} className={`alert alert-${item.alertType}`}>
              {item.msg}
            </div>
          ))} 
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
            <label>re-enter Password</label>
            <input
              type="password"
              placeholder="confirm password*"
              value={confirmPassword}
              name="confirmPassword"
              onChange={(e) => handelChange(e)}
            />
            <small>Please confirm your password </small>
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
