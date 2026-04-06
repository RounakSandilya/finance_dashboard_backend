// controllers/user.controller.js
const UserService = require("../services/user.service");

exports.getUsers = async (req, res) => {
  const users = await UserService.getUsers();
  res.json(users);
};

exports.updateStatus = async (req, res) => {
  try {
    const user = await UserService.updateStatus(
      req.params.id,
      req.body.isActive
    );
    res.json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};