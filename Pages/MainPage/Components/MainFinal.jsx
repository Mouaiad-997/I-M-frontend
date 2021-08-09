import React, { Component } from "react";
import GridOfCards from "./GridOfCards.jsx";
import BaseNavbar from "../../../Base/BaseNavbar.jsx";
import BaseFooter from "../../../Base/BaseFooter.jsx";
export default class MainFinal extends Component{
    render(){
        return (
          <div>
            <div className="row">
              <BaseNavbar />
            </div>
            <div className="row">
              <GridOfCards />
            </div>
            <div className="row">
              <BaseFooter />
            </div>
          </div>
        );
    }
}