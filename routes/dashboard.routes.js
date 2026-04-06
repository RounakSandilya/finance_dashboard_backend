// routes/dashboard.routes.js
const router = require("express").Router();
const controller = require("../controllers/dashboard.controller");

const { verifyToken } = require("../middleware/auth.middleware");

// All logged-in users can see dashboard
router.get("/summary", verifyToken, controller.summary);
router.get("/category", verifyToken, controller.category);
router.get("/trends", verifyToken, controller.trends);
router.get("/recent", verifyToken, controller.recent);

module.exports = router;