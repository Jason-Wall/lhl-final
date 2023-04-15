import { useState, useEffect } from "react";
import axios from "axios";

// State management
export default function useApplicationData() {
  const [state, setState] = useState({
    items: [],
    users: [],
    images: [],
  });

  //Requests for data on first page load.
  useEffect(() => {
    Promise.all([
      axios.get("/items"), // Add more requests as we scale up.
      axios.get("/users"),
      axios.get("/images/first"),
    ]).then((res) => {
      // console.log(res);
      setState((prev) => ({
        ...prev,
        items: res[0].data,
        users: res[1].data,
        images: res[2].data,
      }));
    });
  }, []);

  return {
    state,
    setState,
  };
}
