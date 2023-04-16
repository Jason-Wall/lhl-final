import React from 'react';
import { Link } from 'react-router-dom';

import Item from './Item';
import './Items.scss';

function Items(props) {
  console.log('props.images***', props.images);
  // images is an array of objects
  let arrayOfItemPhotos = props.images.map((image) => {
    return (
      <Link
        to={'/items/' + image.item_id}
        key={image.item_id}
      >
        <Item photo={image.img_url}></Item>
      </Link>
    );
  });

  return <div className='itemsContainer'>{arrayOfItemPhotos}</div>;
}

export default Items;
