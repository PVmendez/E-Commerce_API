const express = require("express");
const administratorsRouter = express.Router();
const adminController = require("../controllers/adminController");
const verifyAdmin = require("../middlewares/verifyAdmin");
const { expressjwt: jwt } = require("express-jwt");
// Rutas del Admin:
// ...

administratorsRouter.get(
  "/verify",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  verifyAdmin,
  adminController.verified,
);
administratorsRouter.delete(
  "/delete/:id",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  verifyAdmin,
  adminController.destroyAdmins,
);

administratorsRouter.patch(
  "/update/:id",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  verifyAdmin,
  adminController.update,
);
administratorsRouter.get(
  "/orders",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  verifyAdmin,
  adminController.indexOrders,
);
administratorsRouter.patch(
  "/orders",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  verifyAdmin,
  adminController.updateOrder,
);
administratorsRouter.get(
  "/products",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  verifyAdmin,
  adminController.indexProducts,
);
administratorsRouter.patch(
  "/products",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  verifyAdmin,
  adminController.updateProducts,
);
administratorsRouter.delete(
  "/products/:id",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  verifyAdmin,
  adminController.destroyProducts,
);
administratorsRouter.post(
  "/products",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  verifyAdmin,
  adminController.storeProducts,
);
administratorsRouter.get("/", adminController.index);
administratorsRouter.get(
  "/:id",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  verifyAdmin,
  adminController.show,
);

module.exports = administratorsRouter;
