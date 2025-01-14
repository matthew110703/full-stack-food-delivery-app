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
    let documents = [];
    for (const item of menuItems) {
      const menu = await Menu.findById(item._id);
      if (!menu) {
        return next({
          message: `Menu with id ${item._id} not found`,
          statusCode: 404,
        });
      }

      totalAmount += menu.price * item.quantity;
      documents.push({
        menuId: menu._id,
        quantity: item.quantity,
      });
    }

    const order = await Order.create({
      userId,
      items: documents,
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

    res.status(200).json(orders);
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
