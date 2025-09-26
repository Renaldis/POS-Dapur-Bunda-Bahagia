const prisma = require("../config/database");

const tableRepository = {
  findAll: async () => {
    return prisma.table.findMany();
  },
  create: async (data) => {
    return prisma.table.create({ data });
  },
};

module.exports = tableRepository;
