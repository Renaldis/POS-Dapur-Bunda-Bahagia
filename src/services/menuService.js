const menuRepository = require("../repositories/menuRepository");
const AppError = require("../utils/appError");

const menuService = {
  getAll: async () => {
    return await menuRepository.findAll();
  },

  getById: async (id) => {
    const menu = await menuRepository.findById(id);
    if (!menu) {
      throw new AppError("Menu not found.", 404);
    }
    return menu;
  },

  create: async (menuData) => {
    if (!menuData.name || !menuData.price || !menuData.stock) {
      throw new Error("Name, price, and stock are required.");
    }

    return await menuRepository.create(menuData);
  },

  update: async (id, menuData) => {
    // Cek dulu apakah menu ada sebelum mencoba mengupdate
    await menuService.getById(id);
    return await menuRepository.update(id, menuData);
  },

  remove: async (id) => {
    await menuService.getById(id);
    return await menuRepository.remove(id);
  },
};

module.exports = menuService;
