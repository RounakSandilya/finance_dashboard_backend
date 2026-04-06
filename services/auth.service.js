// services/auth.service.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserRepo = require("../repositories/user.repository");
const RoleRepo = require("../repositories/role.repository");
const TokenRepo = require("../repositories/token.repository");

const register = async ({ name, email, password, roleName }) => {
  const role = await RoleRepo.findByName(roleName);
  if (!role) throw new Error("Role not found");

  const existingUser = await UserRepo.findByEmail(email);
  if (existingUser) throw new Error("User already exists");

  const user = await UserRepo.create({
    name,
    email,
    password,
    role: role._id,
  });

  return user;
};

const login = async (email, password) => {
  const user = await UserRepo.findByEmail(email);
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  if (!user.isActive) throw new Error("User inactive");
  const token = jwt.sign(
    { id: user._id, role: user.role.name },
    process.env.JWT_SECRET
  );
  return { token };
};

const logout = async (token) => {
  const decoded = jwt.decode(token);
  await TokenRepo.add(token, new Date(decoded.exp * 1000));
  return { message: "Logged out successfully" };
};

module.exports = { register, login, logout};