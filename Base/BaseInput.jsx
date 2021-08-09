import React from "react";
import "../Assets/CSS/styles.css";
const BaseInput = (props) => {
  return (
      <div className="auto-input-section">
        <input
          type={props.type}
          id="search"
          autoComplete="off"
          className="auto-input"
          placeholder=" "
          onChange={props.onChange}
          value={props.value}
        />
        <label className="auto-label">{props.label}</label>
      </div>
  );
};
export default BaseInput;
