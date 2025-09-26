const orderItemsService = require("../../services/orderItemsService");
const catchAsync = require("../../utils/catchAsync");

const orderItemsController = {
  getAll: catchAsync(async (req, res) => {
    const orderItems = await orderItemsService.getAll();
    res.status(200).json(orderItems);
  }),
  create: catchAsync(async (req, res) => {
    const createdOrderItems = await orderItemsService.create(req.body);
    res.status(201).json(createdOrderItems);
  }),
  getById: catchAsync(async (req, res) => {
    const orderItem = await orderItemsService.getById(req.params.id);
    res.status(200).json(orderItem);
  }),
};

module.exports = orderItemsController;
