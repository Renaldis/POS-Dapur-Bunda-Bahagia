const prisma = require("../config/database");

const orderRepository = {
  findAll: async () => {
    return prisma.order.findMany();
  },
  create: async (data) => {
    return prisma.order.create({ data });
  },
};

module.exports = orderRepository;
