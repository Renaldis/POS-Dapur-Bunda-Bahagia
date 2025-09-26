const customerService = require("../../services/customerService.js");
const catchAsync = require("../../utils/catchAsync.js");

const customerController = {
  getAll: catchAsync(async (req, res) => {
    const customers = await customerService.getAll();
    res.status(200).json(customers);
  }),
  create: catchAsync(async (req, res) => {
    const createdCustomer = await customerService.create(req.body);
    res.status(201).json(createdCustomer);
  }),
};

module.exports = customerController;
