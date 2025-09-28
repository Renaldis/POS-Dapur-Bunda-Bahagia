const prisma = require("../config/database");

const orderRepository = {
  findAll: async () => {
    return prisma.order.findMany({
      include: {
        Customer: {
          select: {
            username: true,
            phone: true,
          },
        }, // relasi ke tabel Customer
        Table: {
          select: {
            number: true,
            capacity: true,
          },
        }, // relasi ke tabel Table
        orderItems: {
          select: {
            id: true,
            quantity: true,
            notes: true,
            menuId: true,
            menu: {
              select: {
                name: true,
                price: true,
                description: true,
              },
            },
          },
        },
      },
    });
  },
  create: async (data) => {
    return prisma.order.create({ data });
  },
};

module.exports = orderRepository;
