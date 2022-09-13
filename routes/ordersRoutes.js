const express = require("express");
const ordersRouter = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: jwt } = require("express-jwt");

ordersRouter.get(
  "/",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  orderController.index,
);
ordersRouter.post(
  "/",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  orderController.store,
);

module.exports = ordersRouter;
