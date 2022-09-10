const express = require("express");
const productsRouter = express.Router();
const productController = require("../controllers/productController");
// Rutas Públicas:
// To Do:
productsRouter.get("/", productController.show);
productsRouter.get("/popular", productController.showPopular);
productsRouter.get("/category/:id", productController.showCategory);
productsRouter.get("/:id", productController.index);

module.exports = productsRouter;
