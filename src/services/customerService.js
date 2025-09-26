const customerRepository = require("../repositories/customerRepository");
const AppError = require("../utils/appError");

const customerService = {
  getAll: async () => {
    return await customerRepository.findAll();
  },
  create: async (customerData) => {
    if (!customerData.username || !customerData.phone) {
      throw new AppError("Username or Phone are required");
    }
    return await customerRepository.create(customerData);
  },
};

module.exports = customerService;
