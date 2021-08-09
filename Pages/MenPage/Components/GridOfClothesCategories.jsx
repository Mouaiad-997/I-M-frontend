import React from "react";
import BaseCard from "../../../Base/BaseCard.jsx";
import Jackets from "../../../Assets/Images/jacket.jpg";
import Shirts from "../../../Assets/Images/shirts.jpg";
import Pants from "../../../Assets/Images/pants.jpg";
import Accessoires from "../../../Assets/Images/accessoires.jpg";
import Suits from "../../../Assets/Images/Suit.jpg";
import Glasses from "../../../Assets/Images/Glasses.jpg";
import Sport from "../../../Assets/Images/Sport.jpg";
import Shoes from "../../../Assets/Images/Shoes.jpg";
import Underwears from "../../../Assets/Images/underwear.png";
import "../../../Assets/CSS/styles.css";
const gridOfClothesCategories = (props) => {
  return (
    <div className="clothes-container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <BaseCard
            image={Jackets}
            title={props.jackets}
            link={"/content/" + props.category + "/" + props.jackets}
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Shirts}
            title="Shirts"
            link={"/content/" + props.category + "/" + props.shirts}
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Pants}
            title="Pants"
            l link={"/content/" + props.category + "/" + props.pants}
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Accessoires}
            title="Accessoires"
            linkText="Show Details"
            link={"/content/" + props.category + "/" + props.accessories}
          />
        </div>
        <div className="col">
          <BaseCard
            image={Suits}
            title="Suits"
            link={"/content/" + props.category + "/" + props.suits}
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Glasses}
            title="Glasses"
            link={"/content/" + props.category + "/" + props.Glasses}
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Sport}
            title="Sport"
            link={"/content/" + props.category + "/" + props.sport}
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Shoes}
            title="Shoes"
            link={"/content/" + props.category + "/" + props.shoes}
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Underwears}
            title="Underwears"
            linkText="Show Details"
            link={"/content/" + props.category + "/" + props.Underwears}
          />
        </div>
      </div>
    </div>
  );
};
export default gridOfClothesCategories;
