const express = require("express");
const userController = require("../api/controllers/userController");
const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

router.use(auth);
router.get("/", authorize(["Admin"]), userController.getMyProfile);

module.exports = router;
