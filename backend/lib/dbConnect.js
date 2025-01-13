const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/express-mongo");
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
};

module.exports = dbConnect;
