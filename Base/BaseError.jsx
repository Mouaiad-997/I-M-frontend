import React from "react";
import "../Assets/CSS/styles.css";



const baseError = (props) => {
    return(
        <div>
            {
                Object.keys(props.obj).map((key)=>{
                    return <div className="auto-error">
                        {props.obj[key]}
                    </div>
                })
            }
        </div>
    )
}
export default baseError;