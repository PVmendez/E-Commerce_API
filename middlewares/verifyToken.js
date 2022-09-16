const { Customer } = require("../models");

module.exports = async (req, res, next) => {
  const customer = await Customer.findOne({ where: { id: req.auth.id } });
  if (customer) {
    next();
  } else {
    res.json({ error: "token invalid" });
  }
};
