import React, { Component } from "react";
import PageTitle from "./PageTitle.jsx";
import AccountPageNavs from "./AccountPageNavs.jsx";
import BaseNavbar from "../../../Base/BaseNavbar.jsx";
import BaseFooter from "../../../Base/BaseFooter.jsx";
import InformationIcon from "../../../Icons/InformationIcon.jsx";
import BookmarkIcon from "../../../Icons/BookmarkIcon.jsx";
import CartIcon from "../../../Icons/CartIcon.jsx";
export default class AccountPageFinal extends Component {
  render() {
    return (
      <>
        <div className="row">
          <BaseNavbar />
        </div>
        <div className="row">
          <PageTitle title="Account Page" />
        </div>
        <div className="row">
          <AccountPageNavs
            firstTab="Account Information"
            firstIcon={<InformationIcon />}
            secondTab="Favorites"
            secondIcon={<BookmarkIcon />}
            thirdTab="My Bookings"
            thirdIcon={<CartIcon />}
          />
        </div>
        <div className="row">
          <BaseFooter />
        </div>
      </>
    );
  }
}
