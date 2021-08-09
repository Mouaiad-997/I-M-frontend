import React from "react";
import BaseCard from "../../../Base/BaseCard.jsx";
import Jackets from "../../../Assets/Images/womenJackets.jpg";
import Shirts from "../../../Assets/Images/womenShirts.jpg";
import Pants from "../../../Assets/Images/womenPants.jpg";
import Accessoires from "../../../Assets/Images/womenAccessoires.jpg";
import Suits from "../../../Assets/Images/womenSuits.jpg";
import Glasses from "../../../Assets/Images/womenGlasses.jpg";
import Sport from "../../../Assets/Images/womenSport.jpg";
import Shoes from "../../../Assets/Images/womenShoes.jpg";
import Underwears from "../../../Assets/Images/womenUnderwear.jpg";
import "../../../Assets/CSS/styles.css";
const gridOfClothesCategories = (props) => {
  return (
    <div className="women-clothes-container">
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
            link={"/content/" + props.category + "/" + props.accessoires}
            linkText="Show Details"
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
            link={"/content/" + props.category + "/" + props.underwears}
            linkText="Show Details"
          />
        </div>
      </div>
    </div>
  );
};
export default gridOfClothesCategories;
