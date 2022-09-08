const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");

module.exports = (app) => {
  app.use("/products", publicRoutes);
  app.use("/admin", adminRoutes);
};
