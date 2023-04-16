import React, { useState } from 'react';
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
  // Collects form data from state and submits an axios.post
  // Process is the same for new and edit, backend handles logic to prevent duplicate objects.
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
    <form
      onSubmit={handleSubmit}
      className='itemNew'
      autoComplete='off'
    >
      <span className='strong'>List a new item:</span>
      <br />
      <div>
        <label htmlFor='item-title'>Title:</label>
        <input
          type='text'
          name='item-title'
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder='Item Title'
        />
      </div>
      <div>
        <label htmlFor='item-description'>Description:</label>
        <textarea
          name='item-description'
          value={description}
          placeholder='Item Description'
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label htmlFor='item-condition'>Condition:</label>
        <input
          type='number'
          name='item-condition'
          value={condition}
          placeholder='Item Condition'
          onChange={(event) => {
            setCondition(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor='item-category'>Category:</label>
        <input
          type='number'
          name='item-category'
          value={category}
          placeholder='Item Category'
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor='item-auction'>Auction End:</label>
        <input
          type='datetime-local'
          name='item-auction'
          value={endDate}
          placeholder='Auction End'
          onChange={(event) => {
            setEndDate(event.target.value);
          }}
        />
      </div>

      <div className='modal-buttons'>
        <button>Create Item</button>
      </div>
    </form>
  );
}

export default ItemEdit;
