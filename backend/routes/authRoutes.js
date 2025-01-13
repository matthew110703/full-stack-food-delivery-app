const express = require("express");

// Controllers
const { login, register } = require("../controllers/authController");

// Routes
const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);

module.exports = authRoutes;
