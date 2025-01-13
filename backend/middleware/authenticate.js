const jwt = require("jsonwebtoken");

/** @description Authentication Middleware */
const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.toString().split(" ")[1];
    if (!token) {
      const error = new Error("Unauthorized. Access token is required.");
      error.statusCode = 401;
      return next(error);
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = authenticate;
