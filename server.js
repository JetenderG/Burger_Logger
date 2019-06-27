var express = require("express");
var app = express();
const handlebars = require("handlebars")
app.use(express.static("public"));


var PORT = process.env.PORT || 3000;
var exphand = require("express-handlebars");

app.engine("handlebars", exphand({

    defaultLayout: "main",
    partialsDir: __dirname + "/views/partials",

    helpers: {
        eat: function (data, options) {

            let deOrNot = data.devoured;
            if (deOrNot === 0) {

                return JSON.stringify(data)
            }

        },

        ordered: function (data) {
            let orderOr = data.devored;
            if (orderOr === 0) {
                return data
            }
        }

    }
}));

app.set("view engine", "handlebars");

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());




var routes = require("./controllers/burger_controller.js");

app.use(routes);



app.listen(PORT, function () {

    console.log("You are connected to Localhost:" + PORT);



})