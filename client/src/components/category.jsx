import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Item from './Item';
import './Items.scss';

function Category(props) {
  const params = useParams();

  let itemsInCategory = [];
  

  axios.get(`/categories/:categoryId`, {
    params: {
      id: params.categoryId
    }
  })
  .then(res => {
    console.log(res)
    itemsInCategory = res
  })

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

export default Category;