import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { io } from 'socket.io-client';
const socket = io();

export default function useWebSocket() {

  // State management:
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Socket connected - Client Side');
    });

    socket.on('NUMBERS', (data) => {
      console.log('Socket Package', data);
      setNumbers(data.numbers);
    });

    socket.on('NEW_NUMBERS', (data) => {
      console.log('New Numbers Socket Package', data);
      setNumbers(data.numbers);
    });

    // Cleanup listeners
    return () => {
      socket.off('connect');
      socket.off('NUMBERS');
      socket.off('NEW_NUMBERS');
    };
  }, []);

  return {
    numbers,
    setNumbers
  };
};
