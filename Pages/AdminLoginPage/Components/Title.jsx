import React from "react";
import "../../../Assets/CSS/styles.css";



const Title = (props) => {
    return (
        <div className="title-admin-section">
            <p className="title-admin">{props.title}</p>
        </div>
    )
}
export default Title;