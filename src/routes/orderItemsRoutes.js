const express = require("express");
const orderItemsController = require("../api/controllers/orderItemsController");

const router = express.Router();

router.get("/", orderItemsController.getAll);
router.post("/", orderItemsController.create);

router.get("/:id", orderItemsController.getById);

module.exports = router;
