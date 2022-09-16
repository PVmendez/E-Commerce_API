const express = require("express");
const administratorsRouter = express.Router();
const adminController = require("../controllers/adminController");
const verifyAdmin = require("../middlewares/verifyAdmin");
const { expressjwt: jwt } = require("express-jwt");
// Rutas del Admin:
// ...
<<<<<<< HEAD
administratorsRouter.use(
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  verifyAdmin,
);
administratorsRouter.delete("/delete/:id", adminController.destroy);
=======

administratorsRouter.delete("/delete/:id", adminController.destroyAdmins);
>>>>>>> cfb195c2e59f336e58227591b77c2f9b6219bd57
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
