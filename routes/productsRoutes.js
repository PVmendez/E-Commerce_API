const express = require("express");
const productsRouter = express.Router();
const productController = require("../controllers/productController");
// Rutas Públicas:
// To Do:
productsRouter.get("/", productController.show);
productsRouter.get("/:key", productController.index);

module.exports = productsRouter;
