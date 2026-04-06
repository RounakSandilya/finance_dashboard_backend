// services/dashboard.service.js
const DashboardRepo = require("../repositories/dashboard.repository");

const getSummary = async (userId) => {
  const totals = await DashboardRepo.getTotals(userId);
  let income = 0;
  let expense = 0;
  totals.forEach((t) => {
    if (t._id === "income") income = t.total;
    if (t._id === "expense") expense = t.total;
  });
  return {
    totalIncome: income,totalExpense: expense,netBalance: income - expense,
  };
};

const getCategorySummary = async (userId) => {
  return await DashboardRepo.getCategoryTotals(userId);
};

const getTrends = async (userId) => {
  return await DashboardRepo.getMonthlyTrends(userId);
};

const getRecentActivity = async (userId, page, limit) => {
  const { data, total } = await DashboardRepo.getRecent(userId,page,limit);

  return {
    records: data,total,page,totalPages: Math.ceil(total / limit),
  };
};

module.exports = {
  getSummary,
  getCategorySummary,
  getTrends,
  getRecentActivity,
};