const db = require('../db');

const getBids = () => {
  return db
    .query('SELECT * FROM bids')
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
  .query(`SELECT * FROM bids WHERE user_id = 4`)
  // .query(`SELECT * FROM bids WHERE user_id = ?`, [userId])
  .then(bids => {
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
