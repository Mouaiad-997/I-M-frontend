import React, { Component, useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import "../../Assets/CSS/styles.css";
import AdminImage from "./Components/AdminImage.jsx";
import AdminIcon from "../../Icons/AdminIcon.jsx";
import SigninIcon from "../../Icons/SigninIcon.jsx";
import Title from "./Components/Title.jsx";
import BaseInput from "../../Base/BaseInput.jsx";
import BaseButton from "../../Base/BaseButton.jsx";
import BaseError from "../../Base/BaseError.jsx";
import { useHistory } from "react-router-dom";
const AdminLoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState({});
  const [errorPassword, setErrorPassword] = useState({});
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("admin-info")) {
      history.push("/dasboard");
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
  async function loginAdmin() {
    console.warn(name, password);
    let item = { name, password };
    let result = await fetch("http://127.0.0.1:8000/api/loging/admin", {
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
      localStorage.setItem("admin-info", JSON.stringify(result));
      localStorage.setItem("token", token);
      history.push("/dashboard");
    }
  }
  return (
    <div className="container">
      <Paper elevation={10}>
        <div className="row">
          <AdminImage alt="Login Admin" icon={<AdminIcon />} />
        </div>
        <div className="row">
          <Title title="Login Admin Page" />
        </div>
        <div className="row">
          <BaseInput
            label="Admin Name: "
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <BaseError obj={errorName} />
        </div>
        <div className="row">
          <BaseInput
            label="Password: "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <BaseError obj={errorPassword} />
        </div>
        <div className="row">
          <BaseButton icon={<SigninIcon />} text="Signin Admin" onClick={loginAdmin} />
        </div>
      </Paper>
    </div>
  );
};
export default AdminLoginPage;
