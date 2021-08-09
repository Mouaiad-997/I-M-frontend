import React from "react";
import BaseCard from "../../../Base/BaseCard.jsx";
import Jackets from "../../../Assets/Images/boysJacket.jpg";
import Shirts from "../../../Assets/Images/boysShirts.jpg";
import Pants from "../../../Assets/Images/boysPants.jpg";
import Accessoires from "../../../Assets/Images/boysAccessoires.jpg";
import Suits from "../../../Assets/Images/boysSuits.jpg";
import Glasses from "../../../Assets/Images/boysGlasses.jpg";
import Sport from "../../../Assets/Images/boysSport.jpg";
import Shoes from "../../../Assets/Images/boysShoes.jpg";
import Underwears from "../../../Assets/Images/boysUnderwear.jpg";
import "../../../Assets/CSS/styles.css";
const gridOfClothesCategories = (props) => {
  return (
    <div className="boys-clothes-container">
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
            title={props.shirts}
            link={"/content/" + props.category + "/" + props.shirts}
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Pants}
            title={props.pants}
            link={"/content/" + props.category + "/" + props.pants}
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Accessoires}
            title={props.accessoires}
            linkText="Show Details"
            link={"/content/" + props.category + "/" + props.accessoires}
          />
        </div>
        <div className="col">
          <BaseCard
            image={Suits}
            title={props.suits}
            link={"/content/" + props.category + "/" + props.suits}
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Glasses}
            title={props.glasses}
            link={"/content/" + props.category + "/" + props.glasses}
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Sport}
            title={props.sports}
            link={"/content/" + props.category + "/" + props.sports}
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Shoes}
            title={props.shoes}
            link={"/content/" + props.category + "/" + props.shoes}
            
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Underwears}
            title={props.underwears}
            linkText="Show Details"
            link={"/content/" + props.category + "/" + props.underwears}
            
          />
        </div>
      </div>
    </div>
  );
};
export default gridOfClothesCategories;
