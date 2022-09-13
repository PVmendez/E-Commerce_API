const productsRoutes = require("./productsRoutes");
const administratorsRouter = require("./administratorsRoutes");
const clientsRouter = require("./clientsRoutes");

module.exports = (app) => {
  app.use("/products", productsRoutes);
  app.use("/administrators", administratorsRouter);
  app.use("/clients", clientsRouter);
};
// buyerRouter;
