import { useState, useEffect } from 'react';
import axios from 'axios';

// State management
export default function useApplicationData() {
  const [state, setState] = useState({
    items: { test: 1 }  // Starting with empty objects.
  });

  //Requests for data on first page load.
  useEffect(() => {
    Promise.all([
      axios.get('/items')   // Add more requests as we scale up.
    ])
      .then((res) => {
        setState(prev => ({ ...prev, items: res[0].data }));
      });
  }, []);

  return {
    state,
    setState
  };

}