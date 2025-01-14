const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    items: [
      {
        menuId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Menu",
          required: [true, "Menu is required"],
        },
        quantity: {
          type: Number,
          required: [true, "Quantity is required"],
          default: 1,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: [true, "Total amount is required"],
    },
    status: {
      type: String,
      enum: ["Pending", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
