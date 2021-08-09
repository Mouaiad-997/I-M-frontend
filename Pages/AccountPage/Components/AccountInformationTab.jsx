import React from "react";
import { Link, useHistory } from "react-router-dom";
import LogoutIcon from "../../../Icons/LogoutIcon.jsx";
import BaseButton from "../../../Base/BaseButton.jsx";
import "../../../Assets/CSS/styles.css";

const AccountInformationTab = (props) => {
  let userInfo = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();
  async function logout() {
    console.log("hiii");
    localStorage.clear();
    console.log(localStorage);
    history.push("/home");
  }
  return (
    <div className="account-information-tab-container">
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Email:
          <span className="badge bg-primary rounded-pill">
            {userInfo.user.email}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Username:
          <span className="badge bg-primary rounded-pill">
            {userInfo.user.name}
          </span>
        </li>
      </ul>
      <div className="logout-section">
        <div className="d-grid gap-2 col-6 mx-auto">
          <BaseButton icon={<LogoutIcon />} text="Logout" onClick={logout} />
        </div>
      </div>
    </div>
  );
};
export default AccountInformationTab;
