const mysql = require('mysql');

const source = {
  localhost: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "46234623",
    database: 'burgers_db'
  },

  jawsDB: {
    host: "",
    port: "",
    user: "",
    password: "",
    database: ""
  }
};

if (process.env.JAWSDB) {
  const connection = mysql.createConnection(source.jawsDB);
}
else {
  const connection = mysql.createConnection(source.localhost);
}

connection.connect(err => {
  if (err) throw err;
  console.log('Connected as ID: ' + connection.threadId);
})