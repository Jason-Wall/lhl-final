import React from "react";
import "./Item.scss"; //not sure if this is correct
// import classNames from 'classnames';

function Item(props) {
  console.log("props***", props);
  return (
    <img
      className="item"
      src={props.photo}
      alt="props.title we need to add this"
      width="400"
      height="400"
    />
  );
}

export default Item;