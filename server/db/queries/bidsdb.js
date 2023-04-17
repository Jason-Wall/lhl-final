const db = require('../db');

const getBids = () => {
  return db
    .query(`SELECT bids.*, item_images.img_url FROM bids JOIN item_images ON bids.item_id = item_images.item_id AND bids.id NOT IN (SELECT MIN(id) FROM bids GROUP BY item_id)`)
    .then(bids => {
      console.log(bids.rows)
      return bids.rows;
    })
    .catch(function (xhr, status, error) {
      console.log("Error: " + error);
      console.log("xhr: " + xhr);
      console.log("stat: " + status);
    });
};

const getBidsForUser = (userId) => {
  return db
  .query(`SELECT bids.*, item_images.img_url FROM bids JOIN item_images ON bids.item_id = item_images.item_id WHERE bids.user_id = 4
  AND bids.id NOT IN (SELECT MIN(id) FROM bids GROUP BY item_id)`)
  .then(bids => {
    console.log("%%%", bids.rows)
    return bids.rows;
  })
  .catch(function (xhr, status, error) {
    console.log("Error: " + error);
  });
}

module.exports = {
  getBids,
  getBidsForUser
};
