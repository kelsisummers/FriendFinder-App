// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var friends = require('../data/friends.js');;

// Sets up the Express App
// =============================================================
const apiRoute = express.Router();

// Sets up the Express app to handle data parsing

// console.log(userData);

// Get All Reservations
apiRoute.get("/api/friends", function(req, res) {
  res.json(friends);
});

  // Create New Reso - takes in JSON input
apiRoute.post("/api/:new", function(req, res) {
  friends.empty();
  // req.body Hosts Is Equal To The JSON Post Sent From The User
  // This Works Because Of The Body-Parser Middleware
  var newFriend = req.body;

  friends.push(newFriend);
});

module.exports = apiRoute;