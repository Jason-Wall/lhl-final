const db = require('../db');

const getCategories = () => {
  return db
    .query('SELECT * FROM categories')
    .then(categories => {
      return categories.rows;
    })
    .catch(function (xhr, status, error) {
      console.log("Error: " + error);
    });
};

const getItemsInCategory = (categoryId) => {
  return db
  .query('SELECT * FROM items WHERE category_id = ?', categoryId)
  .then(items => {
    return items.rows;
  })
  .catch(function (xhr, status, error) {
    console.log("Error: " + error);
  });
}

module.exports = {
  getCategories,
  getItemsInCategory
};
