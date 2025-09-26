const orderItemsRepository = require("../repositories/orderItemsRepository");
const AppError = require("../utils/appError");

const orderItemsService = {
  getAll: async () => {
    return await orderItemsRepository.findAll();
  },
  create: async (orderItemsData) => {
    // if (!tableData.number || !tableData.capacity) {
    //   throw new AppError("Table number and capacity are required", 400);
    // }
    return await orderItemsRepository.create(orderItemsData);
  },
  getById: async (id) => {
    return await orderItemsRepository.findById(id);
  },
};

module.exports = orderItemsService;
