import React from "react";
import BaseCard from "../../../Base/BaseCard.jsx";
import Jackets from "../../../Assets/Images/jacket.jpg";
import "../../../Assets/CSS/styles.css";
async function deletefromfavorites(id) {
  console.log("hiiii");
  let userinfo = localStorage.getItem('user-info');
  let resultJson = JSON.parse(userinfo);
  let token="Bearer "+resultJson.token;
   console.log(resultJson.id);
   console.log(id);
  let result = await fetch(
    `http://127.0.0.1:8000/api/deleteFavourite/${resultJson.id}/${id}`,
    {
      method: "DELETE",
      headers: {
        'Authorization' : token,
      },
    }
  );
  console.warn(result.data);
  alert("data has been seved");

}
const favoritesTab = (props) => {
  return (
    <div className="favorites-tab-container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.dataFavorites.map((item) => (
          <div className="col">
            <BaseCard image={"http://127.0.0.1:8000/uploads/"+item.id+"/"+item.file_name} 
              price={item.price} onClickfav={() =>deletefromfavorites(item.model_id)} linkText="Delete from Favorites" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default favoritesTab;
