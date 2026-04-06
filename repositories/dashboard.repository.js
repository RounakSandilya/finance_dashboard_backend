// repositories/dashboard.repository.js
const Record = require("../models/record.model");

// Total Income / Expense
const getTotals = async (userId) => {
  return await Record.aggregate([
    { $match: { user: userId } },
    {
      $group: {
        _id: "$type",
        total: { $sum: "$amount" },
      },
    },
  ]);
};

// Category-wise totals
const getCategoryTotals = async (userId) => {
  return await Record.aggregate([
    { $match: { user: userId } },
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" },
      },
    },
  ]);
};

// Monthly trends
const getMonthlyTrends = async (userId) => {
  return await Record.aggregate([
    { $match: { user: userId } },
    {
      $group: {
        _id: {
          month: { $month: "$date" },
          type: "$type",
        },
        total: { $sum: "$amount" },
      },
    },
    { $sort: { "_id.month": 1 } },
  ]);
};

// Recent activity
const getRecent = async (userId, page, limit) => {
  const skip = (page - 1) * limit;

  const data = await Record.find({ user: userId })
    .sort({ date: -1 })
    .skip(skip)
    .limit(limit);

  const total = await Record.countDocuments({ user: userId });

  return { data, total };
};

module.exports = {
  getTotals,
  getCategoryTotals,
  getMonthlyTrends,
  getRecent,
};