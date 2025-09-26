const express = require("express");
const menuController = require("../api/controllers/menuController");

const auth = require("../middleware/auth");
const {
  createMenuValidation,
} = require("../middleware/validation/menuValidation");
const router = express.Router();

router.get("/", menuController.getAll);
router.get("/:id", menuController.getById);

router.use(auth);
router.post("/", createMenuValidation, menuController.create);
router.route("/:id").put(menuController.update).delete(menuController.remove);

module.exports = router;
