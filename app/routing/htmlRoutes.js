// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
const htmlRoute = express.Router();

// Sets up the Express app to handle data parsing


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
htmlRoute.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
  
htmlRoute.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

// console.log(__dirname)

module.exports = htmlRoute;


