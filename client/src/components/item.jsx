import React from "react";
import "./Item.scss"; //not sure if this is correct
// import classNames from 'classnames';

function Item(props) {
  console.log("*****", props.state);
  return (
    <img
      className="item"
      src={props.image}
      alt={props.title}
      width="400"
      height="400"
    />
  );
}

export default Item;
