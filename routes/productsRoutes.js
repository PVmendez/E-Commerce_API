const express = require("express");
const productsRouter = express.Router();
const productController = require("../controllers/productController");
// Rutas Públicas:
// To Do:
productsRouter.get("/", productController.index);
productsRouter.get("/:slug", productController.show);
productsRouter.get("/random/:id", productController.random);

module.exports = productsRouter;
