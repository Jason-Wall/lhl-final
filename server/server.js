const express = require('express');

// Morgan documents network traffic to console.
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 8001; // Define our base URL as http:\\localhost:8001

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



//endpoints
app.get("/", (req, res) => {
  res.send(`HelloHello!`);
});


app.listen(port, () => {
  console.log(`app is listening on ${port}`);
})

