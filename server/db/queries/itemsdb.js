const db = require("../db");

// getItems - Get object of all Items
const getItems = () => {
  return db
    .query(
      `SELECT * FROM items;`
    )
    .then((items) => {
      return items.rows;
    })
    .catch(function (xhr, status, error) {
      console.log("Error: " + error);
    });
};

module.exports = {
  getItems
};