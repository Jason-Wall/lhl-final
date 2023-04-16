const db = require("../db");

// getItems - Get object of all Items
const getAllItems = () => {
  return db
    .query(`SELECT * FROM items;`)
    .then((items) => {
      return items.rows;
    })
    .catch(function (xhr, status, error) {
      console.log("Error: " + error);
    });
};

// getItem - Get object of one Item
const getItemInfo = () => {
  return db
    .query(
      `SELECT * FROM items 
    JOIN item_images ON items.id = item_images.item_id 
    JOIN bids ON items.id = bids.item_id
    WHERE items.id = 1;`
    )
    .then((itemInfo) => {
      return itemInfo.rows;
    })
    .catch(function (xhr, status, error) {
      console.log("Error: " + error);
    });
};

module.exports = {
  getAllItems,
  getItemInfo,
};
