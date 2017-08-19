var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        console.log(result);
        res.redirect("/");
      });
});

router.put("/:id", function(req, res) {
    burger.updateOne(req.body.burger_name, function(result) {
      console.log(result);
      res.redirect("/");
    });
});

module.exports = router;
