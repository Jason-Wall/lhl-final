import React from "react";
import "./Item.scss"; //not sure if this is correct
// import classNames from 'classnames';

function Item(props) {
  return (
    <img
      className="image"
      src={props.photo}
      alt={props.title}
      width="400"
      height="400"
    />
  );
}

export default Item;
