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
      // I am making a second db query within our .then to obtain all the images for certain item
      return (
        db
          .query(
            `SELECT img_url
        FROM item_images
        WHERE item_id = ${id};`
          )
          // then I add another .then that creates an img_url key in the object at itemInfo.rows[0] and sets it to the result of the second db query for images
          .then((images) => {
            itemInfo.rows[0].img_url = images.rows;
            return itemInfo.rows;
          })
      );
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
