import { useState, useEffect } from "react";
import "./ItemDetail.scss";
import axios from "axios";

import { useParams } from "react-router-dom";

function ItemDetail() {
  const params = useParams();

  const [itemObj, setItemObj] = useState({});

  useEffect(() => {
    axios
      .get(`/items/${params.itemId}`)
      .then((res) => {
        setItemObj(res.data[0]);
      })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error.response.data);
      });
  }, []);

  return (
    <div className="itemDetail">
      I am an {itemObj.description}Item Detail {params.itemId}
    </div>
  );
}

export default ItemDetail;
