const { Admin } = require("../models");

module.exports = async (req, res, next) => {
  const admin = await Admin.findOne({ where: { id: req.auth.id } });
  if (admin) {
    next();
  } else {
    res.json({ error: "invalid token" });
  }
};
