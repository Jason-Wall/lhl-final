const express = require("express");
const erouter = express.Router();
const itemsdb = require("../db/queries/itemsdb");
const bidsdb = require("../db/queries/bidsdb");

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

// POST /items/new - Create new item
erouter.post("/new", (req, res) => {
  // console.log('/items/new - req.body:', req.body);
  itemsdb.createItem(req.body)
    .then((newItem) => {
      // console.log('newItem:', newItem);
      const bidInfo = {
        user_id: newItem[0].user_id,
        item_id: newItem[0].id,
        bid_value: req.body.minBid
      };
      bidsdb.createBid(bidInfo);
    });
});


module.exports = erouter;
