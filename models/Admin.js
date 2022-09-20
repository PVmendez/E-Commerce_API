module.exports = (sequelize, Model, DataTypes) => {
  class Admin extends Model {
    async comparePassword(password) {
      const verifyPassword = await bcrypt.compare(password, this.password);
      return verifyPassword;
    }
  }

  Admin.init(
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
    },
    {
      sequelize,
      paranoid: true,
      modelName: "admin",
    },
  );

  return Admin;
};
