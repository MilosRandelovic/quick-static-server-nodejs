const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Routing handlers

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static HTML as well
app.use(express.static(path.resolve(__dirname + "/public")));

// Log all requests
app.all("*", function(request, response, next) {
  console.log(request.method + ": " + request.originalUrl);
  next(); // pass control to the next handler
});

// ROUTES

// Handle errors
app.use(function(error, request, response, next) {
  console.error(error);
  response
    .status(error.status || 500)
    .json({ status: error.status, message: error.message });
});

app.listen(port);

console.log("Server started: " + port);
