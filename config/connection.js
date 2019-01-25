// Set up MySQL connection.
require("dotenv").config();
var mysql = require("mysql");
var express = require("express");
var app = express();


const host = process.env.HOST;
const PORT = process.env.PORT || 3000;
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
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
// Export connection for our ORM to use.
module.exports = connection;