import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const BaseSpinner = (props) =>{
    return (
      <div className="spinner-section">
        <PulseLoader
          color={props.color}
          loading={props.loading}
          size={props.size}
        />
      </div>
    );
}
export default BaseSpinner;