const express = require("express");
const logger = require("morgan");

const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// Global error handler
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

module.exports = app;
