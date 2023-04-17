import React from "react";
import Carousel from "./Carousel";
import "./Item.scss"; //not sure if this is correct
// import classNames from 'classnames';

function Item(props) {
  return (
    // d-block w-100 these classes are needed for bootstrap for the Carousel, do not remove
    <img className="image d-block w-100" src={props.photo} alt={props.title} />
  );
}

export default Item;
