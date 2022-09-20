const productsRoutes = require("./productsRoutes");
const administratorsRoutes = require("./administratorsRoutes");
const customerRouter = require("./customerRoutes");
const ordersRouter = require("./ordersRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use("/products", productsRoutes);
  app.use("/administrators", administratorsRoutes);
  app.use("/customers", customerRouter);
  app.use("/orders", ordersRouter);
  app.use("/users", userRoutes);
};
