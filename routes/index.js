const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");
const buyerRouter = require("./buyerRoutes");

module.exports = (app) => {
  app.use("/products", publicRoutes);
  app.use("/admin", adminRoutes);
  app.use("/buyers", buyerRouter);
};
buyerRouter