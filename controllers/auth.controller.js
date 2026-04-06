// controllers/auth.controller.js
const AuthService = require("../services/auth.service");

exports.register = async (req, res) => {
  try {
    const user = await AuthService.register(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await AuthService.login(
      req.body.email,
      req.body.password
    );
    res.json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

exports.logout = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const result = await AuthService.logout(token);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};