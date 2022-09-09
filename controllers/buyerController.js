const { Buyer } = require("../models");


const singUp = async (req, res) => {

    const newBuyer = new Buyer({
      firstName: req.body.user.firstname,
      lastName: req.body.user.lastname,
      email: req.body.user.email,
      password: req.body.user.password,
      address: req.body.user.address,
      phone: req.body.user.phone,
      orderList: {},
    });
  
    await newBuyer.save();
};


async function login(req, res) {
  const buyer = await Buyer.findOne({ where: {email: req.body.user.email}});

  if (!buyer) {
    return res.status(400).json({ msg: "User not found" });
  }

  if (!buyer.password === req.body.user.password) {
    return res.status(401).json({ msg: "Invalid Password" });
  }

  res.json(buyer); 
}

// Otros handlers...
// ...

module.exports = {
 singUp,
 login,

};
