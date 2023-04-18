import React, { useState, Fragment } from 'react';
import { Navigate } from 'react-router-dom';

import axios from 'axios';

import SelectListOptions from './general/SelectListOptions';

import './ItemEdit.scss';

const CreateBid = ({items}) => {

  let item = items.find((item) => item.id === 1)

  const [userId, setUserId] = useState(1)
  const [itemId, setItemId] = useState(item);
  const [bidValue, setBidValue] = useState(0)


  // values: [bidInfo.user_id, bidInfo.item_id, bidInfo.bid_value],


  // Collects form data from state and submits an axios.post
  const handleSubmit = (event) => {
    event.preventDefault();

    const bidData = {
      user_id: userId, // HARDCODED USER ID!
      item_id: parseInt(itemId),
      bid_value: parseInt(bidValue),
    };

    axios
      .post('/bids/new', bidData)
      .then((res) => {
        // props.onSubmit(true);
      })
      .catch((error) => {
        console.error('Error submitting bid:', error);
      });
    }
  

  return ( <Fragment>
      {/* {newItemId && <Navigate to={`/items/${itemId}`}} */}

       <form onSubmit={handleSubmit} autoComplete='off'>
         <div className={'itemEdit'}></div>
         <div className={'m-4'}>
           <span className={'strong'}>Create a new bid:</span>
           <div className={'d-flex'}>
             <div className={'d-flex flex-column col-4'}>
            </div>

              <div className={'form-group m-1'}>
                <label htmlFor='item-bid'>Minimum Bid:</label>
                <input
                  className={'form-control'}
                  type='number'
                  name='item-bid'
                  // value={minBid}
                  placeholder='Bid Amount'
                  onChange={(event) => {
                    setBidValue(event.target.value);
                  }}
                />
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-end m-4'>
          <button className={'btn btn-dark submit'}>Create Bid</button>
        </div>
      </form>
    </Fragment>
);
    };

export default CreateBid;