const prisma = require("../config/database.js");

const customerRepository = {
  findAll: async () => {
    return prisma.customer.findMany();
  },
  create: async (data) => {
    return await prisma.customer.create({ data });
  },
};

module.exports = customerRepository;
