
const express = require("express");
const erouter = express.Router();
const imagesdb = require('../db/queries/imagesdb');


// GET /images   - Gets all images
erouter.get("/", (req, res) => {
  imagesdb.getAllImages().then((images) => {
    res.send(images);
  });
});


module.exports = erouter;