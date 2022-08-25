import React,{useState} from "react";
import "./login.css";
import { useAppDispatch} from "../../redux/store";
import { useAlert } from "../../hook/useAlert";
import { LoginRequestBody } from "../../models/auth";


const Login: React.FC = () => {
  const { showAlert, renderAlert } = useAlert();

  const [formData, setFormData] = useState<LoginRequestBody>({
    name: "",
    email: "",
    password: "",
  });

  const { name,email, password } = formData;

  const dispatch = useAppDispatch();

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newForm = {
      ...formData,
    };
    // @ts-ignore
    newForm[e.target.name] = e.target.value;
    setFormData(newForm);
  };

  return (
    <div className="section-log">
      <div className="log-box">
        <form className="form" >
          <h2 className="heading-secondary">Log in</h2>
          <div className="form-control">
            <label>Email</label>
            <input placeholder="Email" />
            <small>Please enter your Email</small>
          </div>
          <div className="form-control">
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <small>Please enter your password</small>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
