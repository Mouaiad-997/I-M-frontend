import React,{useState} from "react";
import AccountInformationTab from "./AccountInformationTab.jsx";
import FavoritesTab from "./FavoritesTab.jsx";
import MyItemsTab from "./MyItemsTab.jsx";
import "../../../Assets/CSS/styles.css"

const AccountPageNavs = (props) => {
  let result = localStorage.getItem('user-info');
  let resultJson = JSON.parse(result);
  console.log(resultJson.token);
  const [dataFavorites, setDataFavorites] = useState([]);
  const [dataBooking , setDataBooking] = useState([]);
async function favorite(){

  let token="Bearer "+resultJson.token;
    let result = await fetch("http://127.0.0.1:8000/api/showFavourites/"+resultJson.id,
    {headers:{
      'Authorization' : token
    },}
    );
    console.warn(result)
    result = await result.json();
     setDataFavorites(result);
    console.warn(result)
}
async function booking(){
  let token="Bearer "+resultJson.token;
    let result = await fetch("http://127.0.0.1:8000/api/showBookings/"+resultJson.id,
    {headers:{
      'Authorization' : token
    },}
    );
    
    result = await result.json();
    setDataBooking(result);
    console.warn(dataBooking)
}




    return (
      <div className="account-page-navs-container">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              {props.firstIcon} {props.firstTab}
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
              onClick={favorite()}
            >
              {props.secondIcon} {props.secondTab}
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
              onClick={booking()}
            >
              {props.thirdIcon} {props.thirdTab}
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <AccountInformationTab link="/login"/>
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <FavoritesTab dataFavorites={dataFavorites}/>
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <MyItemsTab dataBooking={dataBooking}/>
          </div>
        </div>
      </div>
    );
}
export default AccountPageNavs;