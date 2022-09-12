const productsRoutes = require("./productsRoutes");
const adminRoutes = require("./adminRoutes");
const clientRouter = require("./clientRoutes");

module.exports = (app) => {
  app.use("/products", productsRoutes);
  app.use("/admin", adminRoutes);
  app.use("/clients", clientRouter);
};
// buyerRouter;
