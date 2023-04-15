import React from "react";
import Item from "./Item";

function Items(props) {
  // images is an array of objects
  let arrayOfItemPhotos = props.images.map((image) => {
    return (
      <div key={image.id}>
        <Item key={image.id} photo={image.img_url}></Item>
      </div>
    );
  });

  return <div>{arrayOfItemPhotos}</div>;
}

export default Items;
