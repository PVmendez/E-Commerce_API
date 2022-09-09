const { Buyer } = require("../models");

async function index(req, res) {
  const buyers = await Buyer.findAll();
  res.json(buyers)
}

async function show(req, res) {
  const buyer = await Buyer.findOne({ where: {email: req.params.email}});
  res.json(buyer);
}

// Otros handlers...
// ...

module.exports = {
 index,
 show,

};
