// services/record.service.js
const RecordRepo = require("../repositories/record.repository");

const createRecord = async (data, userId) => {
  return await RecordRepo.create({
    ...data,
    user: userId,
  });
};

const getRecords = async (query) => {
  const filter = {};
  if (query.type) filter.type = query.type;
  if (query.category) filter.category = query.category;
  if (query.startDate && query.endDate) {
    filter.date = {
      $gte: new Date(query.startDate),
      $lte: new Date(query.endDate),
    };
  }
  return await RecordRepo.findAll(filter);
};

const updateRecord = async (id, data) => {
  const record = await RecordRepo.update(id, data);
  if (!record) throw new Error("Record not found");
  return record;
};

const deleteRecord = async (id) => {
  const record = await RecordRepo.remove(id);
  if (!record) throw new Error("Record not found");
  return record;
};

module.exports = {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
};