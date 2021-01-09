const express = require('express');
const router = express.Router();
const burger = require('../models/burgers');


// get should render all existing burgers
router.get('/', (req, res) => {
  burger.all(data => {
    res.render("index", { burgers: data });
  });
});

// adds a burger maybe modify so it does stuff with id if needed
router.post('/api/burgers', (req, res) => {
  burger.add({
    name: req.body.name,
    devoured: false
  }, result => {
      res.json({ id: result.insertId });
  });
});

// put request (takes no data except id) changes devoured status to true
router.put('/api/burgers/:id', (req, res) => {
  burger.update(req.params.id, result => {
    return result.changedRows == 0 ?
      res.status(404).end() : res.status(200).end;
  });
});


module.exports = router;