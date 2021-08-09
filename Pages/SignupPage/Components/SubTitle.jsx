import React from "react";
import "../../../Assets/CSS/styles.css";



const subTitle = (props) => {
    return(
        <div className="subtitle-section">
            <div className="subtitle">
                <p>{props.subTitle}</p>
            </div>
        </div>
    )
}
export default subTitle;