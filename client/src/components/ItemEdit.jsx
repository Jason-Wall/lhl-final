import React, { useState, Fragment } from 'react';
import axios from 'axios';
import './ItemEdit.scss';

function ItemEdit(props) {
  // MANAGE STATE
  const [title, setTitle] = useState(props.item || '');
  const [description, setDescription] = useState(props.item.description || '');
  const [condition, setCondition] = useState(props.item.condition || '');
  const [category, setCategory] = useState(props.item.category || '');
  const [endDate, setEndDate] = useState(props.item.endDate || '');
  const [minBid, setMinBid] = useState(props.item.minBid);

  // SUPPORTING FUNCTIONS:
  //populates options from

  // Collects form data from state and submits an axios.post
  const handleSubmit = (event) => {
    event.preventDefault();

    const itemData = {
      user_id: 1, // HARDCODED USER ID!
      category: parseInt(category),
      title,
      description,
      condition: parseInt(condition),
      endDate,
    };

    axios
      .post('/items/new', itemData)
      .then((response) => {
        console.log('Server response:', response.data);
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className='itemEdit container'>
      <form
        onSubmit={handleSubmit}
        className='itemNew'
        autoComplete='off'
      >
        <span className={'strong'}>List a new item:</span>
        <br />
        <div className={'form-group'}>
          <label htmlFor='item-title'>Title:</label>
          <input
            className={'form-control'}
            type='text'
            name='item-title'
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            placeholder='Item Title'
          />
        </div>
        <div className={'form-group'}>
          <label htmlFor='item-description'>Description:</label>
          <textarea
            className={'form-control'}
            name='item-description'
            value={description}
            placeholder='Item Description'
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
        </div>
        <div className={'form-group'}>
          <label htmlFor='item-condition'>Condition:</label>
          <input
            className={'form-control'}
            type='number'
            name='item-condition'
            value={condition}
            placeholder='Item Condition'
            onChange={(event) => {
              setCondition(event.target.value);
            }}
          />
        </div>
        <div className={'form-group'}>
          <label htmlFor='item-category'>Category:</label>
          <input
            className={'form-control'}
            type='number'
            name='item-category'
            value={category}
            placeholder='Item Category'
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          />
        </div>
        <div className={'form-group'}>
          <label htmlFor='item-bid'>Minimum Bid:</label>
          <input
            className={'form-control'}
            type='number'
            name='item-bid'
            value={minBid}
            placeholder='Minimum Bid'
            onChange={(event) => {
              setMinBid(event.target.value);
            }}
          />
        </div>
        <div className={'form-group'}>
          <label htmlFor='item-auction'>Auction End:</label>
          <input
            className={'form-control'}
            type='datetime-local'
            name='item-auction'
            value={endDate}
            placeholder='Auction End'
            onChange={(event) => {
              setEndDate(event.target.value);
            }}
          />
        </div>

        <button className={'btn btn-dark'}>Create Item</button>
      </form>
    </div>
  );
}

export default ItemEdit;
