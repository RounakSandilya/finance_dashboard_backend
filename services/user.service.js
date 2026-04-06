// services/user.service.js
const UserRepo = require("../repositories/user.repository");

const getUsers = async () => {
  return await UserRepo.findAll();
};

const updateStatus = async (id, isActive) => {
  const user = await UserRepo.updateStatus(id, isActive);
  if (!user) throw new Error("User not found");
  return user;
};

module.exports = { getUsers, updateStatus };