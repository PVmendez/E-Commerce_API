const express = require("express");
const customerRouter = express.Router();
const customerController = require("../controllers/customerController");
const { expressjwt: jwt } = require("express-jwt");
// Rutas de Compradores:
// ...

customerRouter.get("/", customerController.index);
customerRouter.get("/one",jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), customerController.show);
customerRouter.patch("/update",jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), customerController.update);
customerRouter.post("/register", customerController.store);
customerRouter.post("/login", customerController.login);
customerRouter.post(
  "/payment",
  jwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  customerController.payment,
);
customerRouter.get("/subscribe", customerController.sendEmail);


module.exports = customerRouter;
