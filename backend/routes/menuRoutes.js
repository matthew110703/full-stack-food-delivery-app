const express = require("express");

// Route handlers
const {
  getAllMenuItems,
  getMenuItem,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
} = require("../controllers/menuController");

const menuRoutes = express.Router();

// Routes
menuRoutes.route("/").get(getAllMenuItems).post(addMenuItem);
menuRoutes
  .route("/:id")
  .get(getMenuItem)
  .put(updateMenuItem)
  .delete(deleteMenuItem);

module.exports = menuRoutes;
