const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Log all requests
app.all('*', (request, response, next) => {
  console.log(request.method + ': ' + request.originalUrl);
  next(); // pass control to the next handler
});

// Routing handlers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static HTML and other content
app.use(express.static(path.resolve(path.join(__dirname, '/public'))));

// Handle errors
app.use((error, request, response, next) => {
  console.error(error);
  response
    .status(error.status || 500)
    .json({ status: error.status, message: error.message });
});

// Start the server
app.listen(port, () => {
  console.log('Server started: ' + port);
});
