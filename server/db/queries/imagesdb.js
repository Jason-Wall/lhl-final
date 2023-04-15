const db = require("../db");

// getImages - Get object of all images
const getAllImages = () => {
  return db
    .query(
      `SELECT * FROM item_images;`
    )
    .then((images) => {
      return images.rows;
    })
    .catch(function (xhr, status, error) {
      console.log("Error: " + error);
    });
};

module.exports = {
  getAllImages
};