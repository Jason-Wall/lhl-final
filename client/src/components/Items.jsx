import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import "./Items.scss";

function Items(props) {
  // images is an array of objects
  // create array of Item Photos
  let arrayOfItemPhotos = props.images.map((image) => {
    let item = props.items.find((item) => item.id === image.item_id);
    return (
      <div className="itemContainer">
        <Link to={"/items/" + image.item_id} key={image.item_id}>
          <Item photo={image.img_url} title={item.title}></Item>
        </Link>
      </div>
    );
  });

  return (
    <div className="top-element">
      <h1 className="siteName">Sell Fast Buy Smart</h1>

      <div className="titleContainer">
        <div className="title">
          <h1>Ending Soon!</h1>
        </div>
        <div className="hr">
          <hr />
        </div>
      </div>

      <div className="endingSoon">
        {props.endingSoon.slice(0, 8).map((item) => {
          let image = props.images.find((image) => image.item_id === item.id);
          return (
            <div className="itemContainer">
              <Link to={`/items/${item.id}`} key={item.id}>
                {/* rather than linking to an item or creating a new component, we render an image directly here with a special class to style the photos smaller */}
                <img
                  className="featuredImage"
                  src={image.img_url}
                  alt={item.title}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="titleContainer">
        <div className="title">
          <h1>All Items</h1>
        </div>
        <div className="hr">
          <hr />
        </div>
      </div>
      <div className="itemsContainer">{arrayOfItemPhotos}</div>
    </div>
  );
}

export default Items;
