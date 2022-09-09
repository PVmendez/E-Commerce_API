const express = require("express");
const publicRouter = express.Router();
const productController = require("../controllers/productController");
// Rutas Públicas:
// ...
publicRouter.get("/", productController.show);
publicRouter.get("/popular", productController.showPopular);
publicRouter.get("/category/:id", productController.showCategory);
publicRouter.get("/:id", productController.index);

module.exports = publicRouter;
