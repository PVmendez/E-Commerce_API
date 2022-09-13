const express = require("express");
const customerRouter = express.Router();
const customerController = require("../controllers/customerController");
const { expressjwt: jwt } = require("express-jwt");
// Rutas de Compradores:
// ...

customerRouter.post("/register", customerController.store);
customerRouter.post("/login", customerController.login);
customerRouter.post(
  "/payment",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  customerController.payment,
);

module.exports = customerRouter;
