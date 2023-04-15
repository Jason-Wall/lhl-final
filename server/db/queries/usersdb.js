const db = require("../db");

// getItems - Get object of all Items
const getAllUsers = () => {
  return db
    .query(
      `SELECT * FROM users;`
    )
    .then((users) => {
      return users.rows;
    })
    .catch(function (xhr, status, error) {
      console.log("Error: " + error);
    });
};

module.exports = {
  getAllUsers
};