const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION,
    dialectModule: require("pg"),
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);
console.log(sequelize);
const Admin = require("./Admin")(sequelize, Model, DataTypes);
const Customer = require("./Customer")(sequelize, Model, DataTypes);
const Category = require("./Category")(sequelize, Model, DataTypes);
const Order = require("./Order")(sequelize, Model, DataTypes);
const Product = require("./Product")(sequelize, Model, DataTypes);

// Luego de definir los modelos, se pueden establecer relaciones
// entre los mismos...

Order.belongsTo(Customer);
Customer.hasMany(Order);
Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = {
  sequelize,
  Admin,
  Customer,
  Category,
  Order,
  Product,
};
