import React from "react";
import "./ThumbNail.scss";

function ThumbNail(props) {
  return <img className="thumbNail" src={props.photo} alt={props.title} />;
}

export default ThumbNail;
