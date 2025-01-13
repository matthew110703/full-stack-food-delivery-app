const jwt = require("jsonwebtoken");

/** @description Authentication Middleware */
const authenticate = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      const error = new Error("Unauthorized. Access token is required.");
      error.statusCode = 401;
      return next(error);
    }

    const token = bearerToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = authenticate;
