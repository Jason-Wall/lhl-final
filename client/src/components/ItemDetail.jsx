import { useState, useEffect, useRef } from "react";
import "./ItemDetail.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import ThumbNail from "./ThumbNail";
import Carousel from "./Carousel";
import CreateBid from "./CreateBid";

function ItemDetail(props) {
  // Get the itemId from the URL parameters
  const params = useParams();
  const [itemObj, setItemObj] = useState({});
  const [countdown, setCountdown] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  // const [countdownInterval, setCountdownInterval] = useState(null);
  const interval = useRef();
  //useRef creates a singular reference point in memory so that on subsequent rerenders it wont rerun, it will just point to the reference it made before
  useEffect(() => {
    axios
      //fetch item data from the server
      .get(`/items/${params.itemId}`)
      .then((res) => {
        console.log("res.data[0]", res.data[0]);
        // Set the item object state with the response data
        setItemObj(res.data[0]);

        // Set a countdown timer to display how much time is left until the bidding closes
        const countdownDate = new Date(res.data[0].end_date);
        if (!interval.current) {
          interval.current = setInterval(() => {
            const now = new Date();
            const timeDifference = countdownDate.getTime() - now.getTime();
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
              (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
              (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            // If the countdown is complete, clear the interval and display a message
            if (timeDifference < 0) {
              clearInterval(interval.current);
              setCountdown("Bids are closed!");
            } else {
              // Check if any value is NaN before displaying countdown
              const countdownValues = [days, hours, minutes, seconds];
              const countdownString = countdownValues.some(isNaN)
                ? null
                : `Only ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left!`;
              setCountdown(countdownString);
            }
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error.response.data);
      });
    // Clear the countdown interval on unmount to prevent memory leaks
    return () => {
      clearInterval(interval.current);
    };
  }, [params]);

  // Helper function to convert bid value to a dollar amount
  const bidToDollars = function (value) {
    return (itemObj.bid_value / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  // set thumbNails
  const thumbNails = function (itemObj) {
    if (!itemObj.img_url) {
      return;
    }
    return itemObj.img_url.map((image) => {
      return (
        <ThumbNail
          photo={image.img_url}
          title={itemObj.title}
          setActiveImage={setActiveImage}
        ></ThumbNail>
      );
    });
  };

  return (
    <>
      {/* check to see if the itemObj exists before rendering the jsx */}
      {itemObj && (
        <div className="itemDetail top-element">
          <div className="images">
            <h1>{itemObj.title}</h1>
            {/* because this data is nested in itemObj and it is an additional async query, it may take longer to load so we check to make sure it exists and has length before rendering */}
            {itemObj.img_url && itemObj.img_url.length > 0 && (
              <Carousel
                images={itemObj.img_url}
                title={itemObj.title}
                active={activeImage}
              ></Carousel>
            )}
          </div>
          <div className="info">
            <hr />
            <span className="description">{itemObj.description}</span>
          </div>
          <div>{thumbNails(itemObj)}</div>
          <div>
            <span>
              <span>Current Bid: {bidToDollars(itemObj.bid_value)}</span>
              <br />
              <span className="countdown-timer">{countdown}</span>
            </span>
            <span>
              <button>BID NOW!</button>
              <span>Condition: {itemObj.condition}</span>
            </span>
          </div>
        </div>
      )}
      <CreateBid item={itemObj} onSubmit={props.onSubmit}/>
    </>
  );
}

export default ItemDetail;
