const User = require("../models/user.model");

const create = (data) => User.create(data);

const findByEmail = (email) =>
  User.findOne({ email }).populate("role");

const findAll = () => User.find().populate("role");

const updateStatus = (id, isActive) =>
  User.findByIdAndUpdate(id, { isActive }, { new: true });

module.exports = {
  create,
  findByEmail,
  findAll,
  updateStatus,
};