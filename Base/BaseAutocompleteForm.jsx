import React, { useState } from "react";
import "../Assets/CSS/styles.css";
import SearchIcon from "../Icons/SearchIcon.jsx";
const BaseAutocompleteForm = (props) => {
  const [data, setData] = useState([]);
  const search = async (key) => {
    console.warn(key);
    let result = await fetch("http://127.0.0.1:8000/api/search/" + key);
    result = await result.json();
    setData(result);
    console.warn(result);
  };
  return (
    <div className="auto-complete-form">
      <input type={props.type} id="search" autoComplete="off" className="auto-form-input" placeholder=" "/>
      <label className="auto-form-label" for="search">{props.label}</label>
    </div>
  );
};
export default BaseAutocompleteForm;
