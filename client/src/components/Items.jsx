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

  return <div className="itemsContainer">{arrayOfItemPhotos}</div>;
}

export default Items;
