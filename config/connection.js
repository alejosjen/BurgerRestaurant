// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: keys.mySQL.host,
    port: keys.mySQL.port,
    user: keys.mySQL.user,
    password: keys.mySQL.password,
    database: keys.mySQL.database
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