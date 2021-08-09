import React from "react";
import "../../Assets/CSS/styles.css";
import SigninIcon from "../../Icons/SigninIcon.jsx";
import {Link} from "react-router-dom";
const splashScreen = () => {
  return (
   <div className="landing-page">
      <div className="page-content">
        <h1>Welcome to I&M store</h1>
        <p>
          To browse the store{" "}
          <Link className="page-link" to="/login">
            <SigninIcon />
            Login Here
          </Link>
        </p>
      </div>
    </div> 
  );
};
export default splashScreen;
