const tableRepository = require("../repositories/tableRepository");
const AppError = require("../utils/appError");

const tableService = {
  getAll: async () => {
    return await tableRepository.findAll();
  },
  create: async (tableData) => {
    if (!tableData.number || !tableData.capacity) {
      throw new AppError("Table number and capacity are required", 400);
    }
    return await tableRepository.create(tableData);
  },
};

module.exports = tableService;
