// Set up MySQL connection.
require("dotenv").config();
var mysql = require("mysql");

const host = process.env.HOST;
const dbPassword = process.env.PASSWORD;
const database = process.env.DATABASE;

var connection = mysql.createConnection({
    host: host,
    port: 3306,
    user: "root",
    password: dbPassword,
    database: database
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;