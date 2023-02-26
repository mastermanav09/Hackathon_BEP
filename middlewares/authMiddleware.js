const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      const error = new Error("Authentication token is required");
      error.statusCode = 400;
      throw error;
    }

    let decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken) {
      const error = new Error("Unauthorized!");
      error.statusCode = 403;
      throw error;
    }

    req.user = userData;
    next();
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    const tokenExpiryError = new jwt.TokenExpiredError();
    if (tokenExpiryError.name === "TokenExpiredError") {
      err.message = "Session Expired! Please login again.";
      err.statusCode = 403;
    }

    next(err);
  }
};
