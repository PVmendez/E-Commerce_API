const { Category } = require("../models");

module.exports = async () => {
  const categories = [
    {
      id: 1,
      name: "Classic",
    },
    {
      id: 2,
      name: "Premium",
    },
  ];

  await Category.bulkCreate(categories);
  ("[Database] Se corrió el seeder de Categories.");
};
