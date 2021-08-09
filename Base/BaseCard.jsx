import React from "react";
import "../Assets/CSS/styles.css";
import TshirtIcon from "../Icons/TshirtIcon.jsx";
import {Link} from "react-router-dom";
const baseCard = (props) => {
  return (
    <div className="base-card">
      <div className="base-card-image">
        <img className="image" src={props.image} alt="man" />
      </div>
      <div className="content-box">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.text}</p>
        <p className="card-price">{props.price}</p>
       
          
        <Link to={props.link} type="button" class="btn btn-outline-danger btn-lg" onClick={props.onClickfav}>
          <TshirtIcon /> {props.linkText}
          
        </Link>
      </div>
    </div>
  );
};
export default baseCard;
