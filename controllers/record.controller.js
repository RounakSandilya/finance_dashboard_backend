// controllers/record.controller.js
const RecordService = require("../services/record.service");

exports.create = async (req, res) => {
  try {
    const record = await RecordService.createRecord(
      req.body,
      req.user.id
    );
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  const records = await RecordService.getRecords(req.query);
  res.json(records);
};

exports.update = async (req, res) => {
  try {
    const record = await RecordService.updateRecord(
      req.params.id,
      req.body
    );
    res.json(record);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await RecordService.deleteRecord(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};