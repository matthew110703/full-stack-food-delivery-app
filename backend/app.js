const express = require("express");
const logger = require("morgan");

const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
app.use("/auth", require("./routes/authRoutes"));
app.use("/menu", require("./routes/menuRoutes"));
app.use("/order", require("./routes/orderRoutes"));

// Global error handler
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

module.exports = app;
