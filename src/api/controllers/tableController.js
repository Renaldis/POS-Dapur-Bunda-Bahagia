const tableService = require("../../services/tableService");
const catchAsync = require("../../utils/catchAsync");

const tableController = {
  getAll: catchAsync(async (req, res) => {
    const tables = await tableService.getAll();
    res.status(200).json(tables);
  }),
  create: catchAsync(async (req, res) => {
    const createdTable = await tableService.create(req.body);
    res.status(201).json(createdTable);
  }),
};

module.exports = tableController;
