const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./lib/dbConnect");

dotenv.config(); // Load environment variables

const app = express();

dbConnect(); // Connect to the database

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
