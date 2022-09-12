const { Client } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const singUp = async (req, res) => {
  await Client.create({
    firstName: req.body.user.firstname,
    lastName: req.body.user.lastname,
    email: req.body.user.email,
    password: req.body.user.password,
    address: req.body.user.address,
    phone: req.body.user.phone,
    orderList: {},
  })
    .then(() => {
      res.status(201).json("created");
    })
    .catch((error) => {
      res.status(409).json({ error });
    });
};

async function login(req, res) {
  const client = await Client.findOne({ where: { email: req.body.user.email } });

  if (!client) {
    return res.status(404).json({ msg: "User not found" });
  }

  const verifyPassword = await bcrypt.compare(req.body.user.password, client.password);

  if (!verifyPassword) {
    return res.status(401).json({ msg: "Invalid Password" });
  }
  const token = jwt.sign({ id: client.id, firstName: client.firstName }, process.env.JWT_SECRET);
  res.json({ token });
}

async function payment(req, res) {
  res.json({ success: "success" });
}
// Otros handlers...
// ...

module.exports = {
  singUp,
  login,
  payment,
};
