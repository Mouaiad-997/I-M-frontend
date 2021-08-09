import React from "react";
import "../../../Assets/CSS/styles.css";

const pageTitle = (props) => {
  return (
    <div className="title-section">
      <p className="title">{props.title}</p>
    </div>
  );
};
export default pageTitle;
