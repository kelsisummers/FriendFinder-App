// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require('../data/friends.js');;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// console.log(userData);

// Get All Reservations
app.get("/api/friends", function(req, res) {
  res.json(friends);
});

  // Create New Reso - takes in JSON input
app.post("/api/:new", function(req, res) {
  // req.body Hosts Is Equal To The JSON Post Sent From The User
  // This Works Because Of The Body-Parser Middleware
  var newFriend = req.body;

  friend.push(newFriend);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});