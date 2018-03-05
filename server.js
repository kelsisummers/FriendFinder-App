// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoute = require('./app/routing/htmlRoutes.js');
var apiRoute = require("./app/routing/apiRoutes.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public/css', express.static(__dirname + '/app/public/css'));
app.use('/public/css', express.static(__dirname + '/app/public/css/images'));


// Routing
app.use(htmlRoute);

app.use(apiRoute);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

