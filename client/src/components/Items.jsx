import React from "react";
import { Link } from "react-router-dom";

import Item from "./Item";
import "./Items.scss";

function Items(props) {
  // images is an array of objects
  // create array of Item Photos
  let arrayOfItemPhotos = props.images.map((image) => {
    return (
      <div className="itemContainer">
        <Link to={"/items/" + image.item_id} key={image.item_id}>
          <Item photo={image.img_url}></Item>
        </Link>
      </div>
    );
  });
  console.log(props.endingSoon)

    return  <><div className="category-title"><h1>Ending Soon</h1></div>
  <div className="itemsContainer">
  {props.endingSoon.map((item) => { 
    let image = props.images.find(image => image.item_id === item.id)
    return ( <div className="itemContainer">
      <Link to={`/items/${item.id}`} key={item.id} >
        <Item photo={image.img_url}></Item>
      </Link>
   </div> )})}
  </div>
  <h1>Sell Fast Buy Smart</h1>
  <div className="itemsContainer">{arrayOfItemPhotos}</div>
  </>
}

export default Items;
