const express = require("express");
const erouter = express.Router();
const itemsdb = require("../db/queries/itemsdb");

// GET /items   - Gets all items
erouter.get("/", (req, res) => {
  itemsdb.getAllItems().then((items) => {
    res.send(items);
  });
});

// GET /items/:id   - Gets all info for one item
erouter.get("/:id", (req, res) => {
  itemsdb.getItemInfo(req.params.id).then((itemInfo) => {
    res.send(itemInfo);
  });
});

module.exports = erouter;
