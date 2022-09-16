const { Admin } = require("../models");

module.exports = async () => {
  const admin = [
    {
      id: 1,
      firstName: "Pablo",
      lastName: "Méndez",
      email: "pablo.mendez@gmail.com",
      password: "1234",
    },
    {
      id: 2,
      firstName: "Felipe",
      lastName: "Arzuaga",
      email: "felipe.arzuaga@gmail.com",
      password: "4321",
    },
    {
      id: 3,
      firstName: "Sofia",
      lastName: "Valdez",
      email: "sofia.valdez@gmail.com",
      password: "9999",
    },
  ];

  await Admin.bulkCreate(admin);
  ("[Database] Se corrió el seeder de Admin.");
};
