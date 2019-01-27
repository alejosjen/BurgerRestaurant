var express = require("express");
var router = express.Router();

//Import the model to use its database functions
var burger = require("../models/burger.js");

//Route for index page with all burgers
router.get("/", function (request, response) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        response.render("index", hbsObject);
    });
});

//Route for inserting a new burger
router.post("/api/burgers", function (request, response) {
    burger.insertOne(
        ["burger_name", "devoured"],
        [request.body.burger_name, request.body.devoured],
        function (result) {
            response.json({ id: result.insertID });
        });
});

//Route for eating a burger
router.put("/api/burgers/:id", function (request, response) {
    var condition = { id: request.params.id };
    burger.updateOne({
        devoured: (request.body.devoured === "true")
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});

module.exports = router;