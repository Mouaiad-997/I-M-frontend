import React from "react";
import "../Assets/CSS/styles.css";
import TshirtIcon from "../Icons/TshirtIcon.jsx";
import { Link } from "react-router-dom";
const baseCard2 = (props) => {
  return (
    <div className="base-card">
      <div className="base-card-image">
        <img className="image" src={props.image} alt="man" style={{width:"500px"}} />
      </div>
      <div className="content-box">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.text}</p>
        <p className="card-price">{props.price} SP</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            type="button"
            type="button"
            class="btn btn-outline-danger btn-lg"
            onClick={props.onClickfav}
          >
            <TshirtIcon /> {props.favText}

          </button>
          <button type="button" class="btn btn-outline-danger btn-lg"   onClick={props.onClickbook}>
            <TshirtIcon /> {props.bookingText}
            
          </button>
        </div>
      </div>
    </div>
  );
};
export default baseCard2;
