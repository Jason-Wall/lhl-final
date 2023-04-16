import "./ItemDetail.scss";
import axios from "axios";

import { useParams } from "react-router-dom";

function ItemDetail(props) {
  const params = useParams();
  console.log("props.images***", props.images);
  // images is an array of objects

  axios.get(`/items/${params.itemId}`).then((res) => {
    console.log("res", res);
  });

  return (
    <div className="itemDetail"> I am an Item Detail {params.itemId} </div>
  );
}

export default ItemDetail;
