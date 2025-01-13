const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Model
const User = require("../models/userModel");

/** @description Reagister a new user */
const register = async (req, res, next) => {
  const { username, password } = req.body;

  // Validate request payload
  if (!username || !password) {
    const error = new Error("Username and password are required");
    error.statusCode = 400;
    return next(error);
  }

  try {
    // Check if user already exists
    const userExists = await User.findOne({ username });
    if (userExists) {
      const error = new Error("User already exists");
      error.statusCode = 400;
      return next(error);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({ username, password: hashedPassword });

    res.status(201).json({ success: true, user });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

/** @description Login a user and returns a JWT token */
const login = async (req, res, next) => {
  const { username, password } = req.body;

  // Validate request payload
  if (!username || !password) {
    const error = new Error("Username and password are required");
    error.statusCode = 400;
    return next(error);
  }

  try {
    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      next(error);
    }

    // Compare password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      const error = new Error("Invalid password");
      error.statusCode = 401;
      return next(error);
    }

    // Create token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ success: true, token });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

module.exports = { register, login };
