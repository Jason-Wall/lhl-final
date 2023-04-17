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
<<<<<<< HEAD
  itemsdb
    .createItem(req.body)
    .then(() => bidsdb.createBid(req.body))
    .then(() => console.log("item and bid success"));
=======
  let newItem = {};
  itemsdb.createItem(req.body)
    .then((res) => {
      newItem = res[0];
      // Use info from the new item to populate the bid:
      const bidInfo = {
        user_id: newItem.user_id,
        item_id: newItem.id,
        bid_value: req.body.minBid
      };
      bidsdb.createBid(bidInfo);
    })
    .then(() => {
      const imageInfo = {
        item_id: newItem.id,
        img_url: req.body.imgUrl
      };
      imagesdb.createImage(imageInfo);
    })
    .then(() => console.log('bid and image creation successful'));
>>>>>>> 16e1ace146b4aad0e3ce1a76e2f3e80df9b6ebe7
});

module.exports = erouter;
