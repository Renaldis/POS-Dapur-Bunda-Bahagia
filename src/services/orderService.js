const orderRepository = require("../repositories/orderRepository");
const AppError = require("../utils/appError");

const orderService = {
  getAll: async () => {
    return await orderRepository.findAll();
  },
  create: async (orderData) => {
    // if (!tableData.number || !tableData.capacity) {
    //   throw new AppError("Table number and capacity are required", 400);
    // }
    return await orderRepository.create(orderData);
  },
};

module.exports = orderService;
