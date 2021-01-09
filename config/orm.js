const connection = require('../config/connection');


const orm = {

  // grab all burgers
  all: (cb) => {
    const queryString = "SELECT * FROM burgers";
    
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  // add burger | may need to change vals to two seperate depending on how pass in data
  add: (vals, cb) => {
    const queryString = "\
    INSERT INTO burgers(burger_name, devoured)\
    VALUES (?, ?)";

    connection.query(queryString, [vals.name, vals.devoured], (err,result) => {
      if (err) throw err;
      cb(result);
    });
  },

  // change devoured status
  eat: (burger_id, cb) => {
    const queryString = "\
    UPDATE burgers\
    SET devoured = true\
    WHERE id = ?";

    connection.query(queryString, [burger_id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }

};


module.exports = orm;

// data will be persistent so it will need to load when page is rendered
// may need to change way callbacks are done (if we even need them)
// maybe add id response so we can cordinate buttons to match id not just name