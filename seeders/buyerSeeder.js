const { Buyer } = require("../models");

module.exports = async () => {
  const buyer = [
    {
      id: 1,
      firstName: "Carlos",
      lastName: "Fernandez",
      email: "carlos.fernandez@gmail.com",
      password: "1234",
      address: "Av Italia 2312",
      phone: "092024546",
      orderList: {},
    },
    {
      id: 2,
      firstName: "Santiago",
      lastName: "Deniz",
      email: "santiago.diniz@gmail.com",
      password: "4321",
      address: "Maldonado 1234",
      phone: "096432567",
      orderList: {},
    },
    {
      id: 3,
      firstName: "Felipe",
      lastName: "Figeroa",
      email: "felipe.figeroa@gmail.com",
      password: "9999",
      address: "Canelones 2345",
      phone: "091464567",
      orderList: {},
    },
  ]

  await Buyer.bulkCreate(buyer);
  console.log("[Database] Se corrió el seeder de Buyer.");
};
