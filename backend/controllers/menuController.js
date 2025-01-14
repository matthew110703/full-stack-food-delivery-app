// Model
const Menu = require("../models/menuModel");

/** @description Get all menu items */
const getAllMenuItems = async (req, res, next) => {
  const { category, order, search, page = 1, limit = 10 } = req.query || {};

  try {
    const query = {};
    const sort = {};

    // Filters
    if (category) query.category = category;
    if (search) query.$text = { $search: search };
    if (order) sort.price = order === "asc" ? 1 : -1;

    const menuItems = await Menu.find(query)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit);

    const totalItems = await Menu.countDocuments(query);

    res.json({
      success: true,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      menuItems,
    });
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
    error.statusCode = 400;
    return next(error);
  }

  try {
    const menuItem = await Menu.findById(id);

    if (!menuItem) {
      const error = new Error("Menu item not found");
      error.statusCode = 404;
      return next(error);
    }

    res.json({ success: true, menuItem });
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
    error.statusCode = 400;
    return next(error);
  }

  try {
    const menuItem = await Menu.create({ name, category, price, availability });

    if (!menuItem) {
      const error = new Error("Menu item not created");
      error.statusCode = 400;
      return next(error);
    }

    res.status(201).json({ success: true, menuItem });
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
    error.statusCode = 400;
    return next(error);
  }

  try {
    const menuItem = await Menu.findOneAndUpdate(
      { _id: id },
      { name, category, price, availability },
      { new: true }
    );
    res.json({ success: true, menuItem });
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
    error.statusCode = 400;
    return next(error);
  }

  try {
    const item = await Menu.findByIdAndDelete(id);

    if (!item) {
      const error = new Error("Menu item not found");
      error.statusCode = 404;
      return next(error);
    }

    res.json({ success: true, message: "Menu item deleted" });
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
