var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  insertOne: function(name, callback) {
    orm.insertOne("burgers", "burger_name", name, function(res) {
      callback(res);
    });
  },
  updateOne: function(burger_name, callback) {
    orm.updateOne("burgers", burger_name, function(res) {
      callback(res);
    });
  },
};

module.exports = burger;
