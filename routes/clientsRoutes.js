const express = require("express");
const clientsRouter = express.Router();
const clientsController = require("../controllers/clientsController");
const { expressjwt: jwt } = require("express-jwt");
// Rutas de Compradores:
// ...

clientsRouter.post("/register", clientsController.store);
clientsRouter.post("/login", clientsController.login);
clientsRouter.post(
  "/payment",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  clientsController.payment,
);

module.exports = clientsRouter;
