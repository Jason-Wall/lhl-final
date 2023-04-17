import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const AllBids = (props) => {

  const [allBids, setAllBids] = useState([]);


  useEffect(() => {
    axios.get('/bids', {
    })
      .then((res) => {
        setAllBids(res.data);
      });
  }, []);

 
  return <div className="itemsContainer">
      {allBids.map((bid) => {
        return (
         <Link key={bid.id} to={`/items/${bid.item_id}`}>
           <img
            className="item"
            src={bid.img_url}
            alt={"bid.title we need to add this"}
            width="400"
            height="400"
    />
          <h1>{bid.bid_value}</h1>
        </Link>
        );
      })
      }
    </div>
  ;
};

export default AllBids;