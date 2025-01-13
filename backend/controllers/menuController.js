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

/** @description Add a new menu item */
const addMenuItem = async (req, res, next) => {
  const { name, category, price, availability } = req.body;
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
  try {
    await Menu.findByIdAndDelete(id);
    res.json({ message: "Menu item deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllMenuItems,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
};
