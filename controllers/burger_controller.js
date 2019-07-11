var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {

        var hbsObject = {

            burgers: data
        }

        console.log(hbsObject);
        res.render("index", hbsObject);
    })

})

router.post("/api/burgers", function (req, res) {
    console.log("hi")
    console.log(req)
    burger.create([
            "burger_name",
        ], [
            req.body.burgerN

        ],
        function (result) {
            console.log(result);
            res.json({
                result
            })
        }
    )

})

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("HHHH   " + JSON.stringify(req.body))
    burger.update({

        devoured: req.body.eat

    }, condition, function (result) {

        if (result.changeRows === 0) {
            return res.status(404).end()
        } else {
            res.status(202).end()
        }
    })


})




module.exports = router;