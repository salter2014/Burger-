var connection = require("../config/connection.js");

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function (table, cols, vals, callback) {
        var queryString = "INSERT INTO " + table + " (" + cols.toString() +  ") " + "VALUES (?)";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    updateOne: function (table, burger_name, callback) {
        var queryString = "UPDATE " + table + " SET devoured=1 WHERE id=" + burger_name.toString();

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
};


module.exports = orm;
