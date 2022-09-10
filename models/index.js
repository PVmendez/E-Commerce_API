const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const Admin = require("./Admin")(sequelize, Model, DataTypes);
const Client = require("./Client")(sequelize, Model, DataTypes);
const Category = require("./Category")(sequelize, Model, DataTypes);
const Order = require("./Order")(sequelize, Model, DataTypes);
const Product = require("./Product")(sequelize, Model, DataTypes);

// Luego de definir los modelos, se pueden establecer relaciones
// entre los mismos...

Order.hasMany(Client);
Client.belongsTo(Order);
Product.hasMany(Order);
Order.belongsTo(Product);
Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = {
  sequelize,
  Admin,
  Client,
  Category,
  Order,
  Product,
};
