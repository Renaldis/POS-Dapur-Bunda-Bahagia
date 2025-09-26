const express = require("express");
const orderController = require("../api/controllers/orderController");

const router = express.Router();

router.get("/", orderController.getAll);
router.post("/", orderController.create);

module.exports = router;
