import React from "react";
import BaseNavbar from "../../../Base/BaseNavbar.jsx";
import BaseFooter from "../../../Base/BaseFooter.jsx";
import GridOfContent from "./GridOfContent.jsx";

  const CategoryContentFinal = (props) => {
    return (
      <>
        <div className="row">
          <BaseNavbar />
        </div>
        
        <div className="row">
         <GridOfContent />
         </div> 
        <div className="row">
          <BaseFooter />
        </div>
      </>
    );
  }
export default CategoryContentFinal;
