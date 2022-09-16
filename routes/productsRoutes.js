const express = require("express");
const productsRouter = express.Router();
const productController = require("../controllers/productController");
const { expressjwt: jwt } = require("express-jwt");

// Rutas Públicas:
// To Do:
productsRouter.get("/", productController.index);
productsRouter.get("/:slug", productController.show);
productsRouter.get("/random/:id", productController.random);
productsRouter.patch(
  "/",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  productController.update,
);
productsRouter.post("/comprar", productController.comprar);

module.exports = productsRouter;
