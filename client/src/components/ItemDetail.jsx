import { useState, useEffect } from "react";
import "./ItemDetail.scss";
import axios from "axios";

import { useParams } from "react-router-dom";

function ItemDetail() {
  const params = useParams();
  const [itemObj, setItemObj] = useState({});

  useEffect(() => {
    axios
      .get(`/items/${params.itemId}`)
      .then((res) => {
        setItemObj(res.data[0]);
      })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error.response.data);
      });
  }, []);
  console.log(itemObj);
  const bidToDollars = function (value) {
    return (itemObj.bid_value / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="itemDetail">
      <h1>
        {itemObj.title}
        <hr />
      </h1>
      <span>
        <img
          className="imageContainer"
          src={itemObj.img_url}
          alt={itemObj.title}
        />
      </span>
      <span>{itemObj.description}</span>
      <span>Current Bid: {bidToDollars(itemObj.bid_value)}</span>
      <button>BID NOW!</button> <span>Condition: {itemObj.condition}</span>
    </div>
  );
}

export default ItemDetail;
