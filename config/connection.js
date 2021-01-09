const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
  const connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "46234623",
    database: "burgers_db"
  });
}

connection.connect(err => {
  if (err) throw err;
  console.log("Connected as ID: " + connection.threadId);
});


module.exports = connection;