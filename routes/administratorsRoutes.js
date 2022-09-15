const express = require("express");
const administratorsRouter = express.Router();
const adminController = require("../controllers/adminController");

// Rutas del Admin:
// ...

administratorsRouter.get("/", adminController.index);
administratorsRouter.get("/:id", adminController.show);
administratorsRouter.delete("/delete/:id", adminController.destroy);
administratorsRouter.patch("/update/:id", adminController.update);
administratorsRouter.get("/orders", adminController.indexOrders);
administratorsRouter.patch("/orders", adminController.updateOrder);
administratorsRouter.post("/register", adminController.store);
administratorsRouter.post("/login", adminController.login);
administratorsRouter.get("/products", adminController.indexProducts);
administratorsRouter.patch("/products", adminController.updateProducts);
module.exports = administratorsRouter;
