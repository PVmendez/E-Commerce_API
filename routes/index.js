const productsRoutes = require("./productsRoutes");
const administratorsRoutes = require("./administratorsRoutes");
const clientsRouter = require("./clientsRoutes");

module.exports = (app) => {
  app.use("/products", productsRoutes);
  app.use("/administrators", administratorsRoutes);
  app.use("/clients", clientsRouter);
};
// buyerRouter;
