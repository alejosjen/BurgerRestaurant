var orm = require("../config/orm.js");

//connect to database and access table
var burger = {
    selectAll: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(name, condition, cb) {
      orm.create("burgers", name, condition, function(res) {
        cb(res);
      });
    },
    updateOne: function(table, name, id, cb) {
      orm.update("burgers", table, name, id, function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;