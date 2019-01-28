var express = require("express");
var app = express();

app.use(express.static("public"));


var PORT = process.env.PORT || 3000;
var exphand = require("express-handlebars");

app.engine("handlebars", exphand({

    defaultLayout: "main"
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