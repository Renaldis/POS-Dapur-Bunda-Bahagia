const express = require("express");
const customerController = require("../api/controllers/customerController");

const router = express.Router();

router.get("/", customerController.getAll);
router.post("/", customerController.create);

module.exports = router;
