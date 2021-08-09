import React from "react";
import "../../../Assets/CSS/styles.css";
import BaseCard from "../../../Base/BaseCard.jsx";
import man from "../../../Assets/Images/man.jpg";
import woman from "../../../Assets/Images/woman.jpg";
import girl from "../../../Assets/Images/girl.jpg";
import boy from "../../../Assets/Images/boy.jpg";
import "../../../Assets/CSS/styles.css";
const gridOfCards = () => {
    return (
      <div className="main-page-container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <BaseCard
              image={man}
              title="Men Fashion"
              linkText="Check men fashion"
              link="/men"
            />
          </div>
          <div className="col">
            <BaseCard
              image={woman}
              title="Women Fashion"
              linkText="Check women fashion"
              link="/women"
            />
          </div>
          <div className="col">
            <BaseCard
              image={boy}
              title="Boys Fashion"
              linkText="Check boys fashion"
              link="/boys"
            />
          </div>
          <div className="col">
            <BaseCard
              image={girl}
              title="Girls Fashion"
              linkText="Check girls fashion"
              link="/girls"
            />
          </div>
        </div>
      </div>
    );
}
export default gridOfCards;