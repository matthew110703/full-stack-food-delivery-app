// Model
const Menu = require("../models/menuModel");

/** @description Get all menu items */
const getAllMenuItems = async (req, res, next) => {
  try {
    const menuItems = await Menu.find();
    res.json({ menuItems });
  } catch (error) {
    next(error);
  }
};

/** @description Get a single menu item */
const getMenuItem = async (req, res, next) => {
  const { id } = req.params;

  // Validation
  if (!id) {
    const error = new Error("Menu item ID is required");
    error.status = 400;
    return next(error);
  }

  try {
    const menuItem = await Menu.findById(id);
    res.json({ menuItem });
  } catch (error) {
    next(error);
  }
};

/** @description Add a new menu item */
const addMenuItem = async (req, res, next) => {
  const { name, category, price, availability } = req.body;

  // Validation
  if (!name || !category || !price) {
    const error = new Error("Name, category, and price are required");
    error.status = 400;
    return next(error);
  }

  try {
    const menuItem = await Menu.create({ name, category, price, availability });
    res.status(201).json({ menuItem });
  } catch (error) {
    next(error);
  }
};

/** @description Update a menu item */
const updateMenuItem = async (req, res, next) => {
  const { id } = req.params;
  const { name, category, price, availability } = req.body;

  // Validation
  if (!id) {
    const error = new Error("Menu item ID is required");
    error.status = 400;
    return next(error);
  }

  try {
    const menuItem = await Menu.findByIdAndUpdate(
      id,
      { name, category, price, availability },
      { new: true }
    );
    res.json({ menuItem });
  } catch (error) {
    next(error);
  }
};

/** @description Delete a menu item */
const deleteMenuItem = async (req, res, next) => {
  const { id } = req.params;

  // Validation
  if (!id) {
    const error = new Error("Menu item ID is required");
    error.status = 400;
    return next(error);
  }

  try {
    await Menu.findByIdAndDelete(id);
    res.json({ message: "Menu item deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllMenuItems,
  getMenuItem,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
};
