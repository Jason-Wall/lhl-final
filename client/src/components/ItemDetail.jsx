import { useState, useEffect } from "react";
import "./ItemDetail.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

function ItemDetail() {
  // Get the itemId from the URL parameters
  const params = useParams();
  const [itemObj, setItemObj] = useState({});
  const [countdown, setCountdown] = useState(null);
  const [countdownInterval, setCountdownInterval] = useState(null);

  useEffect(() => {
    axios
      //fetch item data from the server
      .get(`/items/${params.itemId}`)
      .then((res) => {
        // Set the item object state with the response data
        setItemObj(res.data[0]);
        // Set a countdown timer to display how much time is left until the bidding closes
        const countdownDate = new Date(res.data[0].end_date);
        const intervalId = setInterval(() => {
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
            clearInterval(intervalId);
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
        // Set the countdown interval ID to state for cleanup on unmount
        setCountdownInterval(intervalId);
      })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error.response.data);
      });
    // Clear the countdown interval on unmount to prevent memory leaks
    return () => {
      clearInterval(countdownInterval);
    };
  }, [params]);

  // Helper function to convert bid value to a dollar amount
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
      <div className="countdown-timer">{countdown}</div>
    </div>
  );
}

export default ItemDetail;
