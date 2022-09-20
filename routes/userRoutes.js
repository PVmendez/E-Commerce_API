const express = require("express");
const userRouter = express.Router();
const adminController = require("../controllers/adminController");

userRouter.post("/register", adminController.storeAdmins);
userRouter.post("/login", adminController.login);

module.exports = userRouter;
