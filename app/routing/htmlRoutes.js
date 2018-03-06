// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets Up The Express App
// =============================================================
var htmlRoute = express.Router();


// Route That Sends The User First To The Homepage
htmlRoute.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
  
// Route That Sends User To The Survey
htmlRoute.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

// Exports HTML Route
module.exports = htmlRoute;


