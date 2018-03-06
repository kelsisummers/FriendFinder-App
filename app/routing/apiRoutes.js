// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var friends = require('../data/friends.js');;


// Sets Up The Express App For API
// =============================================================
var apiRoute = express.Router();

// apiRoute.use(function(req, res, next) { // run for any & all requests
//   console.log("Connection to the API.."); // set up logging for every API call
//   next(); // ..to the next routes from here..
// });

// Sets Up The Express App To Handle Data Parsing
apiRoute.route("/api/friends")
  // Get All Friends
  .get(function(req, res){
    res.json(friends);
  })
  // Create New Friend - takes in JSON input
  .post(function(req, res){
    // console.log("Request: ", req)
    // console.log("Response: ", JSON.parse(res))

    // req.body Hosts Is Equal To The JSON Post Sent From The User
    // This Works Because Of The Body-Parser Middleware
    var newFriend = req.body;

    friends.push(newFriend);
    console.log(newFriend)
  });

// Export apiRoute
module.exports = apiRoute;