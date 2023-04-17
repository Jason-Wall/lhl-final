import React from "react";
import Item from "./Item";

function Carousel(props) {
  console.log("carouselprops", props.images);
  return (
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <Item photo={props.images[0].img_url} title={props.title}></Item>
          {/* <img src="..." class="d-block w-100" alt={props.title} /> */}
        </div>
        {props.images.slice(1).map((image) => {
          return (
            <div class="carousel-item">
              {/* <img src="..." class="d-block w-100" alt="..." /> */}
              <Item photo={image.img_url} title={props.title}></Item>
            </div>
          );
        })}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
