import React, { Component } from "react";
import PageTitle from "./PageTitle.jsx";
import GridOfClothesCategories from "./GridOfClothesCategories.jsx";
import BaseNavbar from "../../../Base/BaseNavbar.jsx";
import BaseFooter from "../../../Base/BaseFooter.jsx";
export default class MenPageFinal extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <BaseNavbar />
        </div>
        <div className="men-page-container">
          <div className="row">
            <PageTitle title="Men Fashion" />
          </div>
          <div className="row">
            <GridOfClothesCategories
            category="men"
            jackets="jackets"
            shirts="shirts"
            pants="pants"
            accessoires="accessoires"
            suits="suits"
            glasses="glasses"
            sport="sport"
            shoes="shoes"
            underwears="underwears" />
          </div>
        </div>
        <div className="row">
          <BaseFooter />
        </div>
      </div>
    );
  }
}
