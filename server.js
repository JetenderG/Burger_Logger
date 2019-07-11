var express = require("express");
var app = express();
const handlebars = require("handlebars")
app.use(express.static("public"));


var PORT = process.env.PORT || 4000;
var exphand = require("express-handlebars");

app.engine("handlebars", exphand({

    defaultLayout: "main",
    partialsDir: __dirname + "/views/partials",
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