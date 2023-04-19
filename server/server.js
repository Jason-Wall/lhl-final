const express = require("express");
const http = require('http');
const socketio = require('socket.io');

const port = 8001; // Define our base URL as http:\\localhost:8001

const morgan = require("morgan"); // Morgan documents network traffic to console.
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketio(server);


// Use db instance
const db = require("./db/db");

// Route actions
const items = require("./routes/items");

// Middleware
// Morgan documents network traffic to console.
app.use(morgan("dev"));
// Converts url to readable text
app.use(express.urlencoded({ extended: false }));
// Converts data package to json if applicable
app.use(express.json());
// Prevents cors errors
app.use(cors());
// loads static if applicable. Currently routed to build
app.use(express.static("../client/build"));


//EXPRESS
// Separated Routes for each Resource
const itemRoutes = require("./routes/items");
const userRoutes = require("./routes/users");
const imageRoutes = require("./routes/images");
const categoryRoutes = require("./routes/categories");
const conditionRoutes = require("./routes/conditions");
const bidRoutes = require("./routes/bids");

//Endpoints:
app.use("/items", itemRoutes);
// app.use("/items/:id", itemRoutes);
app.use("/users", userRoutes);
app.use("/images", imageRoutes);
app.use("/categories", categoryRoutes);
app.use("/conditions", conditionRoutes);
app.use("/bids", bidRoutes);




// SOCKET
// server listener
const numbers = [];
io.on('connection', (socket) => {
  socket.currentUser = 0;

  socket.on('login', () => {
    console.log(`${socket.currentUser} has logged in.`);
    socket.broadcast.emit('NEW_NUMBERS', { number, numbers });
  });

  // console.log('someone connected');
  // const number = Math.random() * 10;
  // socket.user = number;
  // numbers.push(number);

  // socket.emit('NUMBERS', { number, numbers });
  // socket.broadcast.emit('NEW_NUMBERS', { number, numbers });

  socket.on('disconnect', () => {
    console.log(`${socket.user} has left the building`);
  });
});


// PORT LISTEN
server.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
