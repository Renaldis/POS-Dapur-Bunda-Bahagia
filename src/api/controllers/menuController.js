const menuService = require("../../services/menuService");
const catchAsync = require("../../utils/catchAsync");

const menuController = {
  getAll: catchAsync(async (req, res) => {
    const menus = await menuService.getAll();
    res.status(200).json(menus);
  }),

  getById: catchAsync(async (req, res) => {
    const menu = await menuService.getById(req.params.id);
    res.status(200).json(menu);
  }),

  create: catchAsync(async (req, res) => {
    const createdMenu = await menuService.create(req.body);
    res.status(201).json(createdMenu);
  }),

  update: catchAsync(async (req, res) => {
    const updatedMenu = await menuService.update(req.params.id, req.body);
    res.status(200).json(updatedMenu);
  }),

  remove: catchAsync(async (req, res) => {
    await menuService.remove(req.params.id);
    res.status(204).end();
  }),
};

module.exports = menuController;
