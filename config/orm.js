var connection = require("./connection.js");


var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(error, result) {
          if (error) {
            throw error;
          }
          cb(result);
          console.log(cb);
        });
      },
};
// In the orm.js file, create the methods that 
//will execute the necessary MySQL commands in 
//the controllers. These are the methods you will 
//need to use in order to retrieve and store data 
//in your database.

// selectAll()
// insertOne()
// updateOne()

module.exports = orm;