const express = require("express");
const buyerRouter = express.Router();
const buyerController = require("../controllers/buyerController");
// Rutas de Compradores:
// ...
buyerRouter.post("/register",  buyerController.singUp)
buyerRouter.post("/login", buyerController.login);

module.exports = buyerRouter; 
