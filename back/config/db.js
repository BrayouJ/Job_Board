const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  database: "jobboard_database",
  user: "brayan_jao",
  password: "brayan00",
});

connection.connect();

module.exports = connection;
