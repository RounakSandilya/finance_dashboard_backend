// controllers/dashboard.controller.js
const DashboardService = require("../services/dashboard.service");

exports.summary = async (req, res) => {
  const data = await DashboardService.getSummary(req.user.id);
  res.json(data);
};

exports.category = async (req, res) => {
  const data = await DashboardService.getCategorySummary(req.user.id);
  res.json(data);
};

exports.trends = async (req, res) => {
  const data = await DashboardService.getTrends(req.user.id);
  res.json(data);
};

exports.recent = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const data = await DashboardService.getRecentActivity(req.user.id,page,limit);

  res.json(data);
};