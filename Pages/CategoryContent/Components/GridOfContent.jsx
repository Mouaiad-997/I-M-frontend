import React, {useState,useEffect} from "react";
import "../../../Assets/CSS/styles.css";
import BaseCard2 from "../../../Base/BaseCard2.jsx";
import Shoes from "../../../Assets/Images/Shoes.jpg";
import {useParams} from "react-router-dom";

const GridOfContent = () => {


  
 
  const [data, setData] = useState([]);
  const {category} = useParams();
  const {type_of_fashion} = useParams();
  console.log(category + type_of_fashion);
  useEffect(async () => {
    let result = await fetch(`http://127.0.0.1:8000/api/showing/${category}/${type_of_fashion}`);
    result = await result.json();
    setData(result);
  }, []);
  {
    data.map((item) => console.warn(item.media[0].file_name));
  }
  async function addfav(id) {
    let userinfo = localStorage.getItem('user-info');
    let resultJson = JSON.parse(userinfo);
     console.log(resultJson.id);
     console.log(id);
     let token="Bearer "+resultJson.token;
    let result = await fetch(`http://127.0.0.1:8000/api/addFavourite/${resultJson.id}/${id}`, {
        method: "POST",
        headers: {
          'Authorization' : token,
        },
      });
      console.log(result);
      alert("data has been seved");

}
async function addbook(id) {
  let userinfo = localStorage.getItem('user-info');
  let resultJson = JSON.parse(userinfo);
   console.log(resultJson.id);
   console.log(id);
   let token="Bearer "+resultJson.token;
  let result = await fetch(`http://127.0.0.1:8000/api/addBooking/${resultJson.id}/${id}`, {
      method: "POST",
      headers: {
        'Authorization' : token,
      },
    });
    console.log(result);
    alert("data has been seved");

}
  return (
    <div className="grid-of-content-section">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data.map((item) => (
          <div className="col" style={{width:250,marginLeft:75}}>
             <BaseCard2
              image={"http://127.0.0.1:8000/uploads/"+item.media[0].id+"/"+item.media[0].file_name}
              title={item.name}
              text={item.size}
              price={item.price} 
              favText="Add to favorites"
              onClickfav={() => addfav(item.id)}
              bookingText="Add to bookings"
              onClickbook={() => addbook(item.id)}
              
            />
            
          </div>
        ))}
      </div>
    </div>
  );
};
export default GridOfContent;
