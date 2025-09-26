const orderService = require("../../services/orderService");
const catchAsync = require("../../utils/catchAsync");

const orderController = {
  getAll: catchAsync(async (req, res) => {
    const orders = await orderService.getAll();
    res.status(200).json(orders);
  }),
  create: catchAsync(async (req, res) => {
    const createdOrder = await orderService.create(req.body);
    res.status(201).json(createdOrder);
  }),
};

module.exports = orderController;
