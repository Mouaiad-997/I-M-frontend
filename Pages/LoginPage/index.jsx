import React, { useEffect, useState } from "react";
import AvatarImage from "./Components/AvatarImage";
import SigninIcon from "../../Icons/SigninIcon.jsx";
import Paper from "@material-ui/core/Paper";
import BaseInput from "../../Base/BaseInput.jsx";
import BaseButton from "../../Base/BaseButton.jsx";
import BaseError from "../../Base/BaseError.jsx";
import PageTitle from "./Components/PageTitle.jsx";
import RegisterLink from "./Components/RegisterLink";
import { useHistory } from "react-router-dom";
import "../../Assets/CSS/styles.css";
const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState({});
  const [errorPassword, setErrorPassword] = useState({});
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/home");
    }
  }, []);
  const formValidation = () => {
    const errorName = {};
    const errorPassword = {};

    let isValid = true;

    if (!name) {
      errorName.nameEmpty = "The name is empty";
      isValid = false;
    }
    if (name && name.trim().length <= 3) {
      errorName.nameShort = "The name is too short";
      isValid = false;
    }

    if (!password) {
      errorPassword.passwordEmpty = "The password is empty";
      isValid = false;
    }

    if (password && password.trim().length <= 3) {
      errorPassword.passwordShort = "invalid password";
      isValid = false;
    }
    setErrorName(errorName);
    setErrorPassword(errorPassword);

    return isValid;
  };
  async function login() {
    console.warn(name, password);
    let item = { name, password };
    let result = await fetch("http://127.0.0.1:8000/api/loging/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.warn(result);
     let token = result.token;
     console.warn(token);
     const validate = formValidation();
    if (validate) {
      localStorage.setItem("user-info", JSON.stringify(result));
      localStorage.setItem("token", token);
      history.push("/home");
    }
  }
  return (
    <div className="container">
      <Paper elevation={8}>
        <div className="row">
          <AvatarImage   />
        </div>
        <div className="row">
          <PageTitle title="Sign in" />
        </div>
        <div className="row">
          <BaseInput
            label="Username: "
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <BaseError obj={errorName} />
        </div>
        <div className="row">
          <BaseInput
            label="Password: "
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <BaseError obj={errorPassword} />
        </div>
        <div className="row">
          <BaseButton icon={<SigninIcon />} text="Sign in" onClick={login} />
        </div>
        <div className="row">
          <RegisterLink link="/signup" />
        </div>
      </Paper>
    </div>
  );
};
export default LoginPage;
