var express = require("express");
var router = express.Router();
var model = require("../models");


//create all our routes and set up logic within those routes where required. 
module.exports = function(app) {
    router.get('/', function(req, res) {
        model.Burger.findAll({})
            .then(function(burgerData) {

                var handlebarsObj = {
                    Burgers: burgerData
                };

                // console.log("handlebarsObj: ", handlebarsObj);
                res.render("index", handlebarsObj);
            });
    });

    router.post("/", function(req, res) {

        model.Burger.create({
                burger_name: req.body.burgerUserInput,
            })
            .then(function(burgerData) {
                res.redirect("/");
            });
    });

    router.put("/:id", function(req, res) {

        model.Burger.update({
                devoured: req.body.devoured
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(function(burgerData) {
                res.redirect("/");
            });
    });

    return router;

};

//exports for server.js
// module.exports = router;
