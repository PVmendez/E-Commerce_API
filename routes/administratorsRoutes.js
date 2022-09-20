const express = require("express");
const administratorsRouter = express.Router();
const adminController = require("../controllers/adminController");
const verifyAdmin = require("../middlewares/verifyAdmin");
const { expressjwt: jwt } = require("express-jwt");
// Rutas del Admin:
// ...
administratorsRouter.use(
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  verifyAdmin,
);

administratorsRouter.delete("/delete/:id", adminController.destroyAdmins);
administratorsRouter.patch("/update/:id", adminController.update);
administratorsRouter.get("/orders", adminController.indexOrders);
administratorsRouter.patch("/orders", adminController.updateOrder);
administratorsRouter.get("/products", adminController.indexProducts);
administratorsRouter.patch("/products", adminController.updateProducts);
administratorsRouter.delete("/products/:id", adminController.destroyProducts);
administratorsRouter.post("/products", adminController.storeProducts);
administratorsRouter.get("/", adminController.index);
administratorsRouter.get("/:id", adminController.show);

module.exports = administratorsRouter;
