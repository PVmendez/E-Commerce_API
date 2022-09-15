const express = require("express");
const administratorsRouter = express.Router();
const adminController = require("../controllers/adminController");

// Rutas del Admin:
// ...

administratorsRouter.get("/", adminController.index);
administratorsRouter.get("/:id", adminController.show);
administratorsRouter.delete("/delete/:id", adminController.destroy);
administratorsRouter.patch("/update/:id", adminController.update);
administratorsRouter.post("/register", adminController.store);
administratorsRouter.post("/login", adminController.login);

module.exports = administratorsRouter;
