import React from "react";
import "./item.scss"; //not sure if this is correct
// import classNames from 'classnames';

export default function Item(props) {
  return <h1>This is where I will put my html. {props.test}</h1>;
}
