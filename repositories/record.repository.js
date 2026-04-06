// repositories/record.repository.js
const Record = require("../models/record.model");

const create = (data) => Record.create(data);

const findAll = (filter) =>
  Record.find(filter).populate("user", "name email");

const findById = (id) => Record.findById(id);

const update = (id, data) =>
  Record.findByIdAndUpdate(id, data, { new: true });

const remove = (id) => Record.findByIdAndDelete(id);

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
};