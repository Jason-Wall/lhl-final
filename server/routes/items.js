const express = require("express");
const erouter = express.Router();
const itemsdb = require("../db/queries/itemsdb");
const bidsdb = require("../db/queries/bidsdb");
const imagesdb = require("../db/queries/imagesdb");

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

// POST /items/new - Create new item and accompanying bid and image.
erouter.post("/new", (req, res) => {
  itemsdb.createItem(req.body)
    .then((newItem) => {
      // Use info from the new item to populate the bid:
      const bidInfo = {
        user_id: newItem[0].user_id,
        item_id: newItem[0].id,
        bid_value: req.body.minBid
      };
      const imageInfo = {
        item_id: newItem[0].id,
        img_url: 'https://i.imgur.com/ZL8IQtP.jpeg'
      };
      Promise.all([
        bidsdb.createBid(bidInfo),
        imagesdb.createImage(imageInfo),
      ]);
    })
    .then(() => console.log('bid and image creation successful'));
});


module.exports = erouter;
