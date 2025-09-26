const prisma = require("../config/database.js");

const userRepository = {
  findByEmail: (email) => {
    return prisma.user.findUnique({
      where: { email },
    });
  },

  create: (data) => {
    return prisma.user.create({ data });
  },

  findById: (id) => {
    return prisma.user.findUnique({ where: { id } });
  },
};

module.exports = userRepository;
