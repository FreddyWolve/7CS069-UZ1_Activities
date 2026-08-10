// Import the Express framework to handle HTTP requests and routing
const express = require("express");

// Import the calculator functions from calculator.js
const { add, subtract, multiply, divide } = require("./calculator.js");

// Initialise an Express application instance
const app = express();

// Middleware to automatically parse incoming JSON payloads in request bodies
app.use(express.json());

// Endpoint for addition: Handles GET requests to /add with query parameters 'a' and 'b'
app.get("/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.json({ result: add(a, b) });
});

// Endpoint for subtraction: Handles GET requests to /subtract
app.get("/subtract", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.json({ result: subtract(a, b) });
});

// Endpoint for multiplication: Handles GET requests to /multiply
app.get("/multiply", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.json({ result: multiply(a, b) });
});

// Endpoint for division: Handles GET requests to /divide with error handling for division by zero
app.get("/divide", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  try {
    const result = divide(a, b);
    res.json({ result });
  } catch (error) {
    // Return a 400 Bad Request status code if an error (like division by zero) occurs
    res.status(400).json({ error: error.message });
  }
});

// Define the port number and start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
