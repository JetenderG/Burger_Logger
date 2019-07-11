var orm = require("../config/orm.js")



var burger = {

    all: function (cb) {

        orm.selectAll("burgers", function (res) {

            cb(res);
        })
    },

    create: function (cols, val, cb) {
        console.log(cols, val, cb)
        orm.insertOne("burgers", cols, val, function (res) {

            cb(res);
        })
    },

    update: function (burger, condition, cb) {
        orm.updateOne("burgers", burger, condition, function (res) {
            cb(res)
        });
    }


};

module.exports = burger;