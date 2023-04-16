import React, { useState } from 'react';
import './ItemEdit.scss';

function ItemEdit() {
  const [title, setTitle] = useState();

  return (
    <form className='itemNew'>
      <span className='strong'>List a new item:</span>
      <br />
      <div>
        <label for='item-title'>Title:</label>
        <input
          type='text'
          name='item-title'
          value=''
          placeholder='Item Title'
        />
      </div>
      <div>
        <label for='item-description'>Description:</label>
        <textarea
          name='item-description'
          placeholder='Item Description'
        ></textarea>
      </div>
      <div>
        <label for='item-category'>Category:</label>
        <input
          type='integer'
          name='item-category'
          value=''
          placeholder='Item Category'
        />
      </div>
      <div>
        <label for='item-expiry'>Auction End:</label>
        <input
          type='date'
          name='item-category'
          value=''
          placeholder='Item Category'
        />
      </div>

      <div className='modal-buttons'>
        <button class='create'>Create Map!</button>
        <button class='cancel'>Cancel</button>
      </div>
    </form>
  );
}

export default ItemEdit;
