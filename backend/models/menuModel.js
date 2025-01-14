const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["Appetizers", "Main Course", "Desserts", "Drinks", "Others"],
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

menuSchema.index({ name: "text", category: "text" });

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
