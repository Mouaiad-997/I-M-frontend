import React from "react";
import "../../../Assets/CSS/styles.css";

const pageTitle = (props) => {
  return (
    <div className="page-title-section">
      <h6 className="title">{props.title}</h6>
    </div>
  );
};
export default pageTitle;
