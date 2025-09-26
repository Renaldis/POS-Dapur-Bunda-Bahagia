const prisma = require("../config/database.js");

const menuRepository = {
  findAll: () => {
    return prisma.menu.findMany();
  },

  findById: (id) => {
    // Gunakan (id) untuk memastikan tipe data
    return prisma.menu.findUnique({
      where: { id },
    });
  },

  create: async (data) => {
    try {
      return await prisma.menu.create({ data });
    } catch (error) {
      if (error.code === "P2002") {
        // unique constraint failed
        throw new Error(`Menu with name "${data.name}" already exists`);
      }
      throw error;
    }
  },

  update: (id, data) => {
    return prisma.menu.update({
      where: { id },
      data,
    });
  },

  remove: (id) => {
    return prisma.menu.delete({
      where: { id },
    });
  },
};

module.exports = menuRepository;
