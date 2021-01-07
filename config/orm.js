const connection = require('../config/connections');

const orm = {
  // grab all burgers
  all: (cb) => {
    const queryString = "SELECT * FROM burgers";

    connection.query(queryString, (err, res) => {
      if (err) throw err;

      cb(res);
    });
  },

  // add burger | may need to change vals to two seperate depending on how pass in data
  add: (vals, cb) => {
    const queryString = "\
    INSERT INTO burgers(burger_name, devoured)\
    VALUES (?, ?)";

    connection.query(queryString, [vals1, vals2], err => {
      if (err) throw err;
    });
  },

  // change devoured status
  eat: (burger_name, cb) => {
    const queryString = "\
    UPDATE burgers\
    SET devoured = true\
    WHERE burger_name = ?";

    connection.query(queryString, [burger_name], err => {
      if (err) throw err;
    });
  }
};


module.exports = orm;

// data will be persistent so it will need to load when page is rendered
// may need to change way callbacks are done (if we even need them)