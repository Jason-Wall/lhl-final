const socketio = require('socket.io');
let ioInstance = null;

const socketBidNotify = (bid) => {
  ioInstance.emit('bid', bid);
};

function startWebSocket(server) {
  const io = socketio(server);
  ioInstance = io;
  // SOCKET

  // Where should I create the rooms?

  // SOCKET LISTENER
  io.on('connection', (socket) => {
    console.log('A new socket has been created.');
    socket.currentUser = 0;

    socket.on('login', (userId) => {
      socket.userId = userId;
      console.log(`User # ${socket.userId} has logged in.`);
      //1 - Query to get all user items bid items.
      //2 - Join all item rooms
    });

    socket.on('bid', (bidInfo) => {
      // Broadcast to room bidInfo.itemId  {User id/name, item id/name, bid price}
    });

    socket.on('disconnect', () => {
      console.log(`${socket.userId} has left the building`);
    });
  });

  return { socketBidNotify };
};

module.exports = { startWebSocket, socketBidNotify };







// socket.broadcast.emit('login', { number, numbers });
    // console.log('someone connected');
    // const number = Math.random() * 10;
    // socket.user = number;
    // numbers.push(number);

    // socket.emit('NUMBERS', { number, numbers });
    // socket.broadcast.emit('NEW_NUMBERS', { number, numbers });
