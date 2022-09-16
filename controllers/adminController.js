const { Admin, Order, Product, Category } = require("../models");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {
  const admins = await Admin.findAll();
  res.json(admins);
}

async function indexOrders(req, res) {
  const orders = await Order.findAll();
  res.json({ orders });
}

async function indexProducts(req, res) {
  const products = await Product.findAll({ include: Category });
  res.json({ products });
}

// Display the specified resource.
async function show(req, res) {
  const admin = await Admin.findOne({ where: { id: req.params.id } });
  res.json(admin);
}

// Store a newly created resource in storage.
const storeAdmins = async (req, res) => {
  await Admin.create({
    firstName: req.body.user.firstname,
    lastName: req.body.user.lastname,
    email: req.body.user.email,
    password: req.body.user.password,
  })
    .then(() => {
      res.status(201).json("created");
    })
    .catch((error) => {
      res.status(409).json({ error });
    });
};

async function login(req, res) {
  const admin = await Admin.findOne({ where: { email: req.body.user.email } });

  if (!admin) {
    return res.status(404).json({ msg: "User not found" });
  }
  const verified = await admin.comparePassword(req.body.user.password);

  if (!verified) {
    return res.status(401).json({ msg: "Invalid Password" });
  }
  const token = jwt.sign({ id: admin.id, firstName: admin.firstName }, process.env.JWT_SECRET);
  res.json({ token });
}

// Update the specified resource in storage.
async function update(req, res) {
  await Admin.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
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

async function updateOrder(req, res) {
  const order = await Order.update({ state: req.body.state }, { where: { id: req.body.id } });
  res.json({ order });
}

async function updateProducts(req, res) {
  const isPopular = req.body.data.popular === "true";
  await Product.update(
    {
      ...req.body.data,
      categoryId: Number(req.body.data.category),
      popular: isPopular,
      slug: req.body.data.name,
    },
    { where: { id: req.body.id } },
  );
}
// Remove the specified resource from storage.
async function destroyAdmins(req, res) {
  await Admin.destroy({ where: { id: req.body.id } });
}

async function destroyProducts(req, res) {
  await Product.destroy({ where: { id: req.params.id } });
}
const storeProducts = async (req, res) => {
  const isPopular = req.body.popular === "true";
  await Product.create({
    name: req.body.name,
    description: req.body.description,
    price: Number(req.body.price),
    stock: Number(req.body.stock),
    categoryId: Number(req.body.category),
    image: "avatar-7.png",
    popular: isPopular,
    slug: req.body.name,
  })
    .then(() => {
      res.status(201).json("created");
    })
    .catch((error) => {
      res.status(409).json({ error });
    });
};
// Otros handlers...
// ...

module.exports = {
  indexOrders,
  indexProducts,
  index,
  show,
  storeAdmins,
  storeProducts,
  login,
  update,
  updateOrder,
  updateProducts,
  destroyAdmins,
  destroyProducts,
};
