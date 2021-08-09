import React, { Component } from "react";
import PageTitle from "./PageTitle.jsx";
import GridOfClothesCategories from "./GridOfClothesCategories.jsx";
import BaseNavbar from "../../../Base/BaseNavbar.jsx";
import BaseFooter from "../../../Base/BaseFooter.jsx";
export default class BoysPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <BaseNavbar />
        </div>
        <div className="boys-page-container">
          <div className="row">
            <PageTitle title="Boys Fashion" />
          </div>
          <div className="row">
            <GridOfClothesCategories
            category="boys"
            jacket="jackets"
            shirts="shirts"
            pants="pants"
            accessoires="accessoires"
            suits="suits"
            glasses="glasses"
            sport="sports"
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
