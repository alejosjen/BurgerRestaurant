var express = require("express");
var router = express.Router();

//Import the model to use its database functions
var burger = require("../models/burger.js");

router.get("/", function (request, response) {

    burger.selectAll(function (data) {
        console.log("test");
        var hbsObject = {
            burgers: data
        };
        
        // console.log(hbsObject);
        
        response.render("index", hbsObject);
        // response.json(hbsObject);
    });
});

router.post("/api/burgers", function (request, response) {
    burger.insertOne(["burger_name", "devoured"],
        [request.body.burger_name, request.body.devoured],
        function (result) {
            response.json({ id: result.insertID });
            response.redirect("/");
        });
});

router.put("/api/burgers/:id", function (request, response) {
    var condition = "id = " + request.params.id;
    // console.log("condition", condition);

    burger.updateOne({
        devoured: request.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});

module.exports = router;