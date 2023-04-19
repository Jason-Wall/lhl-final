const express = require("express");
const erouter = express.Router();
const bidsdb = require("../db/queries/bidsdb");

// GET /bids   - Gets all bids
erouter.get("/", (req, res) => {
  bidsdb.getBids().then((categories) => {
    res.send(categories);
  });
});
// GET /bidss/:userId   - Gets all bids for user
erouter.get("/:userId", (req, res) => {
  let userId = req.query.id
  bidsdb.getBidsForUser(userId).then((bidsForUser) => {
    res.send(bidsForUser);
  });
});

erouter.post("/new", (req, res) => {
  console.log(req.body)
  bidsdb.createBid(req.body)
  .then()
  res.send()
})
module.exports = erouter;