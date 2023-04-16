import React, { useState } from 'react';
import './ItemEdit.scss';

function ItemEdit(props) {
  const [title, setTitle] = useState(props.item || '');
  const [description, setDescription] = useState(props.item.description || '');
  const [category, setCategory] = useState(props.item.category || '');
  const [auctionEnd, setAuctionEnd] = useState(props.item.auctionEnd || '');

  return (
    <form
      className='itemNew'
      autoComplete='off'
      onSubmit={(event) => event.preventDefault()}
    >
      <span className='strong'>List a new item:</span>
      <br />
      <div>
        <label for='item-title'>Title:</label>
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
        <label for='item-description'>Description:</label>
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
        <label for='item-category'>Category:</label>
        <input
          type='integer'
          name='item-category'
          value={category}
          placeholder='Item Category'
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
      </div>
      <div>
        <label for='item-expiry'>Auction End:</label>
        <input
          type='date'
          name='item-category'
          value={auctionEnd}
          placeholder='Item Category'
          onChange={(event) => {
            setAuctionEnd(event.target.value);
          }}
        />
      </div>

      <div className='modal-buttons'>
        <button class='create'>Create Item</button>
        <button class='cancel'>Cancel</button>
      </div>
    </form>
  );
}

export default ItemEdit;
