const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

// setting up public as a static folder
app.use(express.static('public'));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars setup
const exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// importing routes and allowing server to use them
const routes = require('./controllers/catsController');

app.use(routes());

// start server and begin listening for requests
app.listen(PORT, err => {
  if (err) throw err;

  console.log(`Server listening on port ${PORT}... \n`);
});







