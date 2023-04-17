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
const getItemInfo = (id) => {
  return db
    .query(
      `SELECT * FROM items 
    JOIN item_images ON items.id = item_images.item_id 
    JOIN bids ON items.id = bids.item_id
    WHERE items.id = ${id};`
    )
    .then((itemInfo) => {
      console.log(itemInfo.rows);
      return itemInfo.rows;
    })
    .catch(function (xhr, status, error) {
      console.log("Error: " + error);
    });
};

// createItem - Creates new item
const createItem = (item) => {
  const query = {
    text: `INSERT INTO items (user_id, category_id, title, description, condition, end_date) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    values: [item.user_id, item.category, item.title, item.description, item.condition, item.endDate],
  };


  return db
    .query(query)
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
  createItem
};
