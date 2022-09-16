const { Admin } = require("../models");

module.exports = async (req, res, next) => {
  console.log(req.auth);
  const admin = await Admin.findOne({ where: { id: req.auth.id } });
  if (admin) {
    next();
  } else {
    res.json({ error: "invalid token" });
  }
};
