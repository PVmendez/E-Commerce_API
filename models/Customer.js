const bcrypt = require("bcrypt");

module.exports = (sequelize, Model, DataTypes) => {
  class Customer extends Model {
    async comparePassword(password) {
      const verifyPassword = await bcrypt.compare(password, this.password);
      return verifyPassword;
    }
  }

  Customer.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      orderList: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "customer",
      hooks: {
        beforeCreate: (user) => {
          if (user.password) {
            const salt = bcrypt.genSaltSync(10, "a");
            user.password = bcrypt.hashSync(user.password, salt);
          }
        },
        beforeBulkCreate: (users) => {
          users.map((customer) => {
            if (customer.dataValues.password) {
              const salt = bcrypt.genSaltSync(10, "a");
              customer.dataValues.password = bcrypt.hashSync(customer.dataValues.password, salt);
            }
          });
        },
      },
    },
  );

  return Customer;
};
