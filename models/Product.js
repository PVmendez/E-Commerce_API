module.exports = (sequelize, Model, DataTypes) => {
  class Product extends Model {}

  Product.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.REAL,
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      popular: {
        type: DataTypes.BOOLEAN,
      },
      slug: {
        type: DataTypes.STRING,
      }

    },
    {
      sequelize,
      modelName: "Product",
    }
  );

  return Product;
};
