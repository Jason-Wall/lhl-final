import React from "react";
import "./Item.scss"; //not sure if this is correct
// import classNames from 'classnames';

function Item(props) {
  return (
    <img className="image d-block w-100" src={props.photo} alt={props.title} />
  );
}

export default Item;
