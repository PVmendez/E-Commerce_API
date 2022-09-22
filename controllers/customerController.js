const { Customer } = require("../models");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const nodemailer = require("nodemailer");

const store = async (req, res) => {
  const customer = await Customer.findOne({ where: { email: req.body.user.email } });

  if (!customer) {
    return res.status(404).json({ msg: "User already exists" });
  }

  await Customer.create({
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
  const customer = await Customer.findOne({ where: { email: req.body.user.email } });

  if (!customer) {
    return res.status(404).json({ msg: "User not found" });
  }
  const verified = await customer.comparePassword(req.body.user.password);

  if (!verified) {
    return res.status(401).json({ msg: "Invalid Password" });
  }
  const token = jwt.sign(
    { id: customer.id, firstName: customer.firstName },
    process.env.JWT_SECRET,
  );
  res.status(200).json({ token });
}

async function payment(req, res) {
  res.status(200).json({ success: "success" });
}

async function index(req, res) {
  const customer = await Customer.findAll();
  res.status(200).json(customer);
}

async function update(req, res) {
  const customer = await Customer.findOne({ where: { id: req.body.user.id } });

  if (req.body.user.email) {
    if (!customer.email === req.body.user.email) {
      await Admin.update(
        {
          email: req.body.user.email,
        },
        {
          where: { id: req.body.user.id },
        },
      );
    }
  }

  if (req.body.user.address) {
    if (!customer.address === req.body.user.address) {
      await Admin.update(
        {
          address: req.body.user.address,
        },
        {
          where: { id: req.body.user.id },
        },
      );
    }
  }

  if (req.body.user.newPassword) {
    if (!costumer.password === req.body.user.newPassword) {
      if (!req.body.user.newPassword === req.body.user.confirmPassword) {
        await Admin.update(
          {
            email: req.body.email,
            address: req.body.address,
            password: req.body.password,
          },
          {
            where: { id: req.params.id },
          },
        )
          .then(() => {
            res.status(201).json("updated");
          })
          .catch((error) => {
            res.status(409).json({ error });
          });
      }
    }
  }
}

async function show(req, res) {
  const customer = await Customer.findOne({ where: { email: req.body.userStore.email } });
  res.json(customer);
}

async function sendEmail(req, res) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "valentino.mendez.rey@gmail.com",
      pass: "njoajdgqcklieggi",
    },
  });

  let info = await transporter.sendMail({
    from: "Remitente",
    to: req.body.user.email,
    subject: `Gracias por suscribirte ${req.body.user.name} ✔`,
    text: "Recibiras todas las nuestras novedades",
  });

  transporter.sendMail(info, (error) => {
    if (error) {
      res.status(500).send(error.message);
    }
    res.status(200).json(req.body);
  });
}
// Otros handlers...
// ...

module.exports = {
  index,
  update,
  store,
  show,
  login,
  payment,
  sendEmail,
};
