const express = require("express");
const tableController = require("../api/controllers/tableController");

const router = express.Router();

router.get("/", tableController.getAll);
router.post("/", tableController.create);

module.exports = router;
