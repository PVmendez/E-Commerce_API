const express = require("express");
const administratorsRouter = express.Router();
const adminController = require("../controllers/adminController");

// Rutas del Admin:
// ...

administratorsRouter.delete("/delete/:id", adminController.destroyAdmins);
administratorsRouter.patch("/update/:id", adminController.update);
administratorsRouter.get("/orders", adminController.indexOrders);
administratorsRouter.patch("/orders", adminController.updateOrder);
administratorsRouter.post("/register", adminController.storeAdmins);
administratorsRouter.post("/login", adminController.login);
administratorsRouter.get("/products", adminController.indexProducts);
administratorsRouter.patch("/products", adminController.updateProducts);
administratorsRouter.delete("/products/:id", adminController.destroyProducts);
administratorsRouter.post("/products", adminController.storeProducts);
administratorsRouter.get("/", adminController.index);
administratorsRouter.get("/:id", adminController.show);

module.exports = administratorsRouter;
