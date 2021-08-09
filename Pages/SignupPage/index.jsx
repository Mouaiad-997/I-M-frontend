import React, { useState } from "react";
import AvatarImage from "../SignupPage/Components/AvatarImage.jsx";
import SignupIcon from "../../Icons/SignupIcon.jsx";
import Paper from "@material-ui/core/Paper";
import PageTitle from "./Components/PageTitle.jsx";
import SubTitle from "../SignupPage/Components/SubTitle.jsx";
import BaseInput from "../../Base/BaseInput.jsx";
import BaseButton from "../../Base/BaseButton.jsx";
import BaseError from "../../Base/BaseError.jsx";
const SignupPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState({});
  const [errorPassword, setErrorPassword] = useState({});
  const [errorEmail, setErrorEmail] = useState({});

  const formValidation = () => {
    const errorName = {};
    const errorPassword = {};
    const errorEmail = {};

    let isValid = true;

    if(!name){
      errorName.nameEmpty = "The name is empty";
      isValid = false;
    }
    if (name && name.trim().length <= 3) {
      errorName.nameShort = "The name is too short";
      isValid = false;
    }

    if(!password){
      errorPassword.passwordEmpty = "The password is empty";
      isValid = false;
    }
    if (password && password.trim().length <= 3) {
      errorPassword.passwordShort = "invalid password";
      isValid = false;
    }

    if(!email){
      errorEmail.emailEmpty = "The email is empty";
      isValid = false;
    }
    if (email && !email.includes("@")) {
      errorEmail.emailValidation = "invalid email";
      isValid = false;
    }
    setErrorName(errorName);
    setErrorEmail(errorEmail);
    setErrorPassword(errorPassword);

    return isValid;
  };

  async function signup() {
    let item = { name, email, password };
    console.warn(item);
    let result = await fetch("http://127.0.0.1:8000/api/singing/user", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const validate = formValidation();
    if (validate) {
      result = await result.json();
      console.warn(result);
      alert("data has been seved");
    }
  }
  return (
    <div className="container">
      <Paper elevation={8}>
        <div className="row">
          <AvatarImage />
        </div>
        <div className="row">
          <PageTitle title="Sign up" />
        </div>
        <div className="row">
          <SubTitle subTitle="Please fill up the form to signup" />
        </div>
        <div className="row">
          <BaseInput
            label="First Name: "
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <BaseError obj={errorName} />
        </div>
        <div className="row">
          <BaseInput
            label="Email: "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <BaseError obj={errorEmail} />
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
          <BaseInput label="Confirm Password: " type="password" />
        </div>
        <div className="row">
          <BaseButton icon={<SignupIcon />} onClick={()=>signup()} text="Register"  />
        </div>
      </Paper>
    </div>
  );
};
export default SignupPage;
