const Role = require("../models/role.model");

const findByName = (name) => Role.findOne({ name });

module.exports = { findByName };