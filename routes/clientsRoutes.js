const express = require("express");
const clientsRouter = express.Router();
const clientsController = require("../controllers/clientsController");
const verifyToken = require("../middlewares/verifyToken");
// Rutas de Compradores:
// ...

clientsRouter.post("/register", clientsController.store);
clientsRouter.post("/login", clientsController.login);
clientsRouter.post("/payment", verifyToken, clientsController.payment);

module.exports = clientsRouter;
