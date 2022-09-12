const express = require("express");
const clientRouter = express.Router();
const clientController = require("../controllers/clientController");
const verifyToken = require("../middlewares/verifyToken");
// Rutas de Compradores:
// ...

clientRouter.post("/register", clientController.singUp);
clientRouter.post("/login", clientController.login);
clientRouter.post("/payment", verifyToken, clientController.payment);

module.exports = clientRouter;
