import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Item from './Item'


function Category(props) {
  const params = useParams();

  const [itemsInCategory, setItemsInCategory] = useState([]);
  
  useEffect(() => {
  axios.get(`/categories/:categoryId`, {
    params: {
      id: params.categoryId
    }
  })
  .then((res) => {
    setItemsInCategory(res.data)
   })
}, [params])

return <div className='itemsContainer'>
{itemsInCategory.map((item) => {
return (
  <Link
    to={`/items/${item.id}`}
    key={item.id}>
       <Item photo={item.img_url}></Item>
      <h2>{item.title}</h2>
  </Link>
);
})}
</div>;
}


export default Category;