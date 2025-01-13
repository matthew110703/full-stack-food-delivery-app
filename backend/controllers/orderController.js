// Models
const Order = require("../models/orderModel");
const Menu = require("../models/menuModel");

/** @description Place an order with the selected menu items and Quantities */
const placeOrder = async (req, res, next) => {
  const { userId } = req.user;
  const { menuItems } = req.body;

  try {
    // Calculate the total amount
    let totalAmount = 0;
    for (const item of menuItems) {
      const menu = await Menu.findById(item.menuId);
      totalAmount += menu.price * item.quantity;
    }

    // Add menu items to the order
    let items = [];
    for (const item of menuItems) {
      items.push({
        menuId: item.menuId,
        quantity: item.quantity,
      });
    }

    // Create the order
    const order = await Order.create({
      userId,
      items,
      totalAmount,
    });

    res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    next(error);
  }
};

/** @description Get all orders */
const getOrders = async (req, res, next) => {
  const { userId } = req.user;

  try {
    const orders = await Order.find({ userId });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    next(error);
  }
};

/** @description Change order status */
const changeOrderStatus = async (req, res, next) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  placeOrder,
  getOrders,
  changeOrderStatus,
};
