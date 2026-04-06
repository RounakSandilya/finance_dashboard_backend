// routes/user.routes.js
const router = require("express").Router();
const controller = require("../controllers/user.controller");

const { verifyToken } = require("../middleware/auth.middleware");
const { authorizeRoles } = require("../middleware/role.middleware");

router.get("/", verifyToken, authorizeRoles("Admin"), controller.getUsers);
router.patch("/:id/status",verifyToken,authorizeRoles("Admin"),controller.updateStatus);

module.exports = router;