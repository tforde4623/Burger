const orm = require('../config/orm');

const burgers = {
  all: cb => {
    orm.all(res => {
      cb(res);
    });
  },

  add: (vals, cb) => {
    orm.add(vals, res => {
      cb(res);
    });
  },

  // maybe change update by id not name
  update: (burger_id, cb) => {
    orm.eat(burger_id, res => {
      cb(res);
    });
  }
};


module.exports = burgers;