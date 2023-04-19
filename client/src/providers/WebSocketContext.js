import { useState, useEffect, createContext } from "react";
import { io } from 'socket.io-client';

export const webSocketContext = createContext();

export default function WebSocketProvider(props) {
  const socket = io();
  console.log('socket', socket);

  const socketLogin = (currentUser) => {
    console.log('in Socket Login - WebSocketContext');
    socket.emit('login', currentUser);
  };

  const socketInfo = { socketLogin };

  return (
    <webSocketContext.Provider value={socketInfo}>
      {props.children}
    </webSocketContext.Provider>

  );
};