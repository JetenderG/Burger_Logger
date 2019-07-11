var connection = require("../config/connection.js");

function valPair(pairs) {


    const array = Object.entries(pairs)

    console.log(array)
    for (const key of array) {
        console.log(key)
        const statement = key[0] + "=" + key[1];
        console.log(statement)
        return statement;

    }
}



var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    insertOne: function (table, cols, vals, cb) {
        console.log(vals)
        var queryString = "INSERT INTO " + table;
        queryString += " ("
        queryString += cols.toString()
        queryString += ") "
        queryString += "VALUES ("
        queryString += " ? ";
        queryString += "); ";
        console.log(queryString)
        connection.query(queryString, [vals], function (err, result) {
            console.log(queryString);
            console.log(result)
            cb(result)
        })
    },

    updateOne: function (table, objColValue, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += valPair(objColValue);
        queryString += " WHERE ";
        queryString += condition + ";";

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            cb(result)

            if (err) throw err;
        })
    }
}

module.exports = orm;