const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["Appetizers", "Main Course", "Desserts"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    availability: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
