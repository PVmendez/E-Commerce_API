const bcrypt = require("bcrypt");

module.exports = (sequelize, Model, DataTypes) => {
  class Client extends Model {}

  Client.init(
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
      modelName: "Client",
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSaltSync(10, "a");
            user.password = bcrypt.hashSync(user.password, salt);
          }
        },
      },
    },
  );

  return Client;
};
