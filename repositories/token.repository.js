// repositories/token.repository.js
const Token = require("../models/token.model");

const add = (token, expiresAt) =>
  Token.create({ token, expiresAt });

const exists = (token) =>
  Token.findOne({ token });

module.exports = { add, exists };