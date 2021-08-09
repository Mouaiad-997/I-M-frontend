import React from "react";
import Logo from "../../../Assets/Images/logo.png";
import {Link} from "react-router-dom";
import "../../../Assets/CSS/styles.css";
const AvatarImage = () => {
  return (
    <div className="image-section">
      <Link to="/home" className="navbar-brand" href="#">
        <img src={Logo} alt="I&M" />
      </Link>
    </div>
  );
};
export default AvatarImage;