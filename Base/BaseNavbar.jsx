import React from "react";
import Logo from "../Assets/Images/logo.png";
import Home from "../Icons/HomeIcon.jsx";
import {Link, useHistory} from "react-router-dom";
import Account from "../Icons/AccountIcon.jsx";
import BarIcon from "../Icons/CollapseIcon.jsx";
import AutoCompleteForm from "../Base/BaseAutocompleteForm.jsx";
const BaseNavbar = () => {
  let user = JSON.parse(localStorage.getItem('user-info'));
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        {localStorage.getItem("user-info") ? (
          <div className="container-fluid">
            <Link to="/home" className="navbar-brand" href="#">
              <img src={Logo} alt="I&M" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <BarIcon />
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <Link to="/home" className="nav-link" aria-current="page">
                    <Home /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/account"
                    type="button"
                    className="nav-link"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <Account />
                    {user.user.name.toUpperCase()}
                  </Link>
                </li>
              </ul>
              <AutoCompleteForm type="text" label="search" />
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="I&M" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <BarIcon />
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <Link to="/home" className="nav-link" aria-current="page">
                    <Home /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/login"
                    type="button"
                    className="nav-link"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <Account />
                    Your Account 
                  </Link>
                </li>
              </ul>
              <AutoCompleteForm type="text" label="search" />
            </div>
          </div>
        )}
      </nav>
    );
}
export default BaseNavbar;