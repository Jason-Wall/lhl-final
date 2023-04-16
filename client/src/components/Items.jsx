import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import "./Items.scss";

function Items(props) {
  // images is an array of objects
  // create array of Item Photos
  let arrayOfItemPhotos = props.images.map((image) => {
    console.log("image", image);
    let item = props.items.find((item) => item.id === image.item_id);
    return (
      <div className="itemContainer">
        <Link to={"/items/" + image.item_id} key={image.item_id}>
          <Item photo={image.img_url} title={item.title}></Item>
        </Link>
      </div>
    );
  });
  console.log(props.endingSoon);

  return (
    <div className="top-element">
      <h1>Sell Fast Buy Smart</h1>
      <div>
        <h1>Ending Soon</h1>
        <hr />
      </div>
      <div className="itemsContainer">
        {props.endingSoon.map((item) => {
          let image = props.images.find((image) => image.item_id === item.id);
          return (
            <div className="itemContainer">
              <Link to={`/items/${item.id}`} key={item.id}>
                <img
                  className="featuredImage"
                  src={image.img_url}
                  alt={item.title}
                />
                {/* <Item photo={image.img_url} title={item.title}></Item> */}
              </Link>
            </div>
          );
        })}
      </div>
      <div classNames="test">
        <div className="left">
          <h1>All Items</h1>
        </div>
        <div className="right">
          <hr />
        </div>
      </div>
      <div className="itemsContainer">{arrayOfItemPhotos}</div>
    </div>
  );
}

export default Items;
