import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Log all requests
app.use((request, _, next) => {
  console.log(`${request.method}: ${request.originalUrl}`);
  next();
});

// Serve static content from the "public" folder
app.use(express.static("public"));

// Handle errors
app.use((error, _, response, __) => {
  console.error(error);
  response
    .status(error.status ?? 500)
    .json({ status: error.status, message: error.message });
});

// Start the server
app.listen(port, () => {
  console.log("Server started: " + port);
});
