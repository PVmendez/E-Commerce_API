module.exports = (sequelize, Model, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      customerData: {
        type: DataTypes.JSON,
      },
      products: {
        type: DataTypes.JSON,
      },
      state: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "order",
    },
  );

  return Order;
};
