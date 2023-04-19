import { useState, useEffect, createContext } from "react";
import { io } from 'socket.io-client';

export const webSocketContext = createContext();

export default function WebSocketProvider(props) {
  // MANAGE STATE
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io();
    setSocket(socket);

    socket.on('bid', (data) => {
      console.log('someone made a bid!', data);
    });

    //Cleanup
    return () => {
      socket.off('bid');
      socket.close();
    };

  }, []);

  // FUNCTIONS
  const socketLogin = (currentUser) => {
    console.log('inside socket Login');
    socket.emit('login', currentUser);
  };


  const socketInfo = { socketLogin };
  return (
    <webSocketContext.Provider value={socketInfo}>
      {props.children}
    </webSocketContext.Provider>

  );
};