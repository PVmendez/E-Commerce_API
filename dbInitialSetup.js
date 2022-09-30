require("dotenv").config();
const db = require("./models");

async function seeders() {
  // Crear tablas:
  await db.sequelize.sync({ force: true });
  ("[Database] ¡Las tablas fueron creadas!");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/categorySeeder")();
  await require("./seeders/productsSeeder")();
  await require("./seeders/adminSeeder")();
  await require("./seeders/customerSeeder")();
  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

seeders();
