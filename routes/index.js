const productsRoutes = require("./productsRoutes");
const adminRoutes = require("./adminRoutes");
const buyerRouter = require("./buyerRoutes");

module.exports = (app) => {
  app.use("/products", productsRoutes);
  app.use("/admin", adminRoutes);
  app.use("/buyers", buyerRouter);
};
buyerRouter;
