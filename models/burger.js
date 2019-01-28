var orm = require("../config/orm.js")



var burger = {

    all: function (cb) {

        orm.selectAll("burgers", function (res) {

            cb(res);
        })
    },

    create: function (cols, val, cb) {
        orm.insertOne("burgers", cols, val, function (res) {

            cb(res);
        })
    },

    update: function (burger, condition, cd) {

        orm.updateOne("burgers", condition, function (res) {


            cb(res)
        })
    }


};

module.exports = burger;