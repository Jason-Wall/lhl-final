import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const MyBids = (props) => {
  const params = useParams();
  const [myBids, setMyBids] = useState([]);
  

  useEffect(() => {
    axios
      .get("/bids/:userId", {
        params: {
          id: params.userId,
        },
      })
      .then((res) => {
        setMyBids(res.data);
      });
  }, [params]);

  return (
    <div className="itemsContainer">
      {myBids.map((bid) => {
        return (
          <Link key={bid.id} to={`/items/${bid.item_id}`}>
            <img
              className="image"
              src={bid.img_url}
              alt={"bid.title we need to add this"}
            />
            <h1>{bid.bid_value}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default MyBids;
