const express = require("express");
const buyerRouter = express.Router();
const buyerController = require("../controllers/buyerController");
// Rutas de Compradores:
// ...
buyerRouter.get("/",  buyerController.index)
buyerRouter.get("/login/:email", buyerController.show);

module.exports = buyerRouter; 
