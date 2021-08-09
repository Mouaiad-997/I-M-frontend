import React from "react";
import BaseButton from "../../../Base/BaseButton.jsx";
import SignupIcon from "../../../Icons/SignupIcon.jsx";
const registerLink = (props) => {
  return (
    <div className="link-section">
      <p className="link-text">If you don't have an account</p>
      <BaseButton text="Signup now" icon={<SignupIcon />} link={props.link} />
    </div>
  );
};
export default registerLink;
