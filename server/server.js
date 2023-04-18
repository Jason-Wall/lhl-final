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

//Endpoints - Currently lives inside of server - As we scale up we need to move
// into routes folder for each (user, items, category, etc.)

app.use("/items", itemRoutes);
// app.use("/items/:id", itemRoutes);
app.use("/users", userRoutes);
app.use("/images", imageRoutes);
app.use("/categories", categoryRoutes);
app.use("/conditions", conditionRoutes);
app.use("/bids", bidRoutes);




// SOCKET
// server listener
io.on('connection', () => {
  console.log('someone connected');
});


// PORT LISTEN
server.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
