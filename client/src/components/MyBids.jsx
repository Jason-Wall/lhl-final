import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


const MyBids = (props) => {

  const params = useParams();
  const [myBids, setMyBids] = useState([]);


  useEffect(() => {
    axios.get('/bids/:userId', {
      params: {
        id: params.userId
      }
    })
      .then((res) => {
        setMyBids(res.data);
      });
  }, [params]);

 
  return <div className="itemsContainer">
      {myBids.map((bid) => {
        return (
         <Link to={`/items/${bid.item_id}`}>
          <h1>{bid.bid_value}</h1>
        </Link>
        );
      })
      }
    </div>
  ;
};

export default MyBids;