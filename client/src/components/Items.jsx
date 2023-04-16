import React from "react";
import Item from "./Item";
import "./Items.scss";

function Items(props) {
  console.log("props.images***", props.images);
  // images is an array of objects
  let arrayOfItemPhotos = props.images.map((image) => {
    return <Item key={image.id} photo={image.img_url}></Item>;
  });

  return <div className="itemsContainer">{arrayOfItemPhotos}</div>;
}

export default Items;
