// middleware/auth.middleware.js
const jwt = require("jsonwebtoken");
const TokenRepo = require("../repositories/token.repository");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ message: "No token" });
  const blacklisted = TokenRepo.exists(token);
  if (blacklisted) {
    return res.status(401).json({ message: "Token expired (logged out)" });
  }
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { verifyToken};