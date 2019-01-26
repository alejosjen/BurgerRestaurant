var connection = require("./connection.js");


var orm = {
    selectAll: function(table) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(error, result) {
          if (error) {
            throw error;
          }
          console.log(result);
        });
      },

      insertOne: function(table, name, condition) {
        var queryString = "INSERT INTO ? VALUES ?;";
        connection.query(queryString, [table, name, condition], function(error, result){
          if (error) {
            throw error;
          }
          console.log(result);
        });
      },
      //Edit name of burger
      updateOne: function(table, name, condition) {
        var queryString = "UPDATE ? SET ? WHERE ?;";
        connection.query(queryString, [table, name, condition], function(error, result){
          if (error) {
            throw error;
          }
          console.log(result);
        });
      }
};

module.exports = orm;