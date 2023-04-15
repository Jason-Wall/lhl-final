const erouter = require("express").Router();

module.exports = db => {
  erouter.get("/items", (req, res) => {
    db.query(
      `
      SELECT * 
      FROM items;
    `
    ).then(({ rows: items }) => {
      response.json(items);
    });
  });

  return erouter;
};
