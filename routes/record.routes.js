// routes/record.routes.js
const router = require("express").Router();
const controller = require("../controllers/record.controller");

const { verifyToken } = require("../middleware/auth.middleware");
const { authorizeRoles } = require("../middleware/role.middleware");

// Create → Admin & Analyst
router.post(
  "/",
  verifyToken,
  authorizeRoles("Admin", "Analyst"),
  controller.create
);

// Read → All roles
router.get(
  "/",
  verifyToken,
  authorizeRoles("Admin", "Analyst", "Viewer"),
  controller.getAll
);

// Update → Admin only
router.put(
  "/:id",
  verifyToken,
  authorizeRoles("Admin"),
  controller.update
);

// Delete → Admin only
router.delete(
  "/:id",
  verifyToken,
  authorizeRoles("Admin"),
  controller.delete
);

module.exports = router;