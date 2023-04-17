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

// .query(
//   `SELECT items.*,
//   (SELECT ARRAY_AGG(img_url)
//   FROM item_images
//   WHERE item_id = ${id}) AS images,
// bids.*
// FROM items
// JOIN bids ON items.id = bids.item_id
// WHERE items.id = ${id};`
// )

// getItem - Get object of one Item
const getItemInfo = (id) => {
  return db
    .query(
      `SELECT items.*, 
    bids.*
  FROM items
  JOIN bids ON items.id = bids.item_id
  WHERE items.id = ${id};`
    )
    .then((itemInfo) => {
      return db
        .query(
          `SELECT img_url
        FROM item_images
        WHERE item_id = ${id};`
        )
        .then((images) => {
          itemInfo.rows[0].img_url = images.rows;
          console.log("itemInfo", itemInfo.rows);
          return itemInfo.rows;
        });
    })
    .catch(function (xhr, status, error) {
      console.log("Error: " + error);
    });
};

// createItem - Creates new item
const createItem = (item) => {
<<<<<<< HEAD
  console.log("in createItem", item);
=======
>>>>>>> 16e1ace146b4aad0e3ce1a76e2f3e80df9b6ebe7
  const query = {
    text: `INSERT INTO items (user_id, category_id, title, description, condition, end_date) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    values: [
      item.user_id,
      item.category,
      item.title,
      item.description,
      item.condition,
      item.endDate,
    ],
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
  createItem,
};
