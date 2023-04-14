const express = require('express');

// Morgan documents network traffic to console.
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 8001; // Define our base URL as http:\\localhost:8001

// Use db instance
const db = require("./db/db");

// Route actions
const items = require("./routes/items");

// Middleware
// Morgan documents network traffic to console.
app.use(morgan('dev'));
// Converts url to readable text
app.use(express.urlencoded({ extended: false }));
// Converts data package to json if applicable
app.use(express.json());
// Prevents cors errors
app.use(cors());
// loads static if applicable. Currently routed to build
app.use(express.static('../client/build'));



// Separated Routes for each Resource
const itemRoutes = require("./routes/items");
const userRoutes = require("./routes/users");
const imageRoutes = require("./routes/images");
const categoryRoutes = require("./routes/categories");



//Endpoints - Currently lives inside of server - As we scale up we need to move
// into routes folder for each (user, items, category, etc.)
// app.use("/items", items(db));

app.use("/items", itemRoutes);
app.use("/users", userRoutes);
app.use("/images", imageRoutes);
app.use("/categories", categoryRoutes)



app.listen(port, () => {
  console.log(`app is listening on ${port}`);
})

