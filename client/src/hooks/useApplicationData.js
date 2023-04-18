import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

// State management
export default function useApplicationData() {

  const params = useParams();

  const [state, setState] = useState({
    items: [],
    users: [],
    images: [],
    categories: [],
    itemsEndingSoon: [],
    conditions: []
  });

  //Requests for data on first page load.
  useEffect(() => {
    Promise.all([
      axios.get("/items"), // Add more requests as we scale up.
      axios.get("/users"),
      axios.get("/images/first"),
      axios.get("/categories"),
      axios.get("/items/ending-soon"),
      axios.get("/conditions")
    ]).then((res) => {
      // console.log(res);
      setState((prev) => ({
        ...prev,
        items: res[0].data,
        users: res[1].data,
        images: res[2].data,
        categories: res[3].data,
        itemsEndingSoon: res[4].data,
        conditions: res[5].data
      }));
    });
  }, []);

  return {
    state,
    setState,
  };
}
