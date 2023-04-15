const express = require("express");
const erouter = express.Router();
const itemsdb = require('../db/queries/itemsdb');


// GET /items   - Gets all items
erouter.get("/", (req, res) => {
  itemsdb.getAllItems().then((items) => {
    res.send(items);
  });
});


module.exports = erouter;



