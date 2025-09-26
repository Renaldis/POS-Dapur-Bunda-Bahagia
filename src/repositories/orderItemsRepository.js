const prisma = require("../config/database");

const orderItemsRepository = {
  findAll: async () => {
    return prisma.orderItem.findMany();
  },
  create: async (data) => {
    return prisma.orderItem.create({ data });
  },
  findById: async (id) => {
    return prisma.orderItem.findMany({
      where: { orderId: id },
    });
  },
};

module.exports = orderItemsRepository;
