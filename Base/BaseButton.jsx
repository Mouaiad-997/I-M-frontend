import React from "react";
import "../Assets/CSS/styles.css"
import {Link} from "react-router-dom";



const baseButton = (props) => {
    return (
      <div className="button-section">
        <div class="d-grid gap-2 col-6 mx-auto">
          <Link to={props.link} class="btn btn-outline-primary btn-link" type="button" onClick={props.onClick}>
            {props.icon} {props.text}
          </Link>
        </div>
      </div>
    );
}
export default baseButton;