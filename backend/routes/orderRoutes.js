const express = require("express");

// Route Handlers
const {
  placeOrder,
  getOrders,
  changeOrderStatus,
} = require("../controllers/orderController");

const orderRoutes = express.Router();

// Middleware
const authenticate = require("../middleware/authenticate");
orderRoutes.use(authenticate);

// Routes
orderRoutes.post("/", placeOrder);
orderRoutes.get("/", getOrders);
orderRoutes.route("/:orderId").put(changeOrderStatus);

module.exports = orderRoutes;
