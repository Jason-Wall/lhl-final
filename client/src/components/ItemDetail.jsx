import './ItemDetail.scss';

import { useParams } from 'react-router-dom';

function ItemDetail(props) {
  const params = useParams();
  console.log('props.images***', props.images);
  // images is an array of objects

  return (
    <div className='itemDetail'> I am an Item Detail {params.itemId} </div>
  );
}

export default ItemDetail;
