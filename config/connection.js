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
    host: "j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "ud0ohqg5v3w75ns9",
    password: "tn3uvvx43sq0ej9q",
    database: "neog1j444f9oxm7v"
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