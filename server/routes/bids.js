const express = require("express");
const erouter = express.Router();
const bidsdb = require("../db/queries/bidsdb");
const { socketBidNotify } = require('../websocket');

// GET /bids   - Gets all bids
erouter.get("/", (req, res) => {
  bidsdb.getBids().then((categories) => {
    res.send(categories);
  });
});
// GET /bidss/:userId   - Gets all bids for user
erouter.get("/:userId", (req, res) => {
  let userId = req.query.id;
  bidsdb.getBidsForUser(userId).then((bidsForUser) => {
    res.send(bidsForUser);
  });
});

// POST /bids/new - Create new bid
erouter.post("/new", (req, res) => {
  bidsdb.createBid(req.body)
    .then((bid) => {
      socketBidNotify(bid[0]);
      res.send(bid);
    }
    );
});
module.exports = erouter;