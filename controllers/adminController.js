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
  const admin = await Admin.findOne({where: {id: req.params.id}});
  res.json(admin);
}

// Store a newly created resource in storage.
const store = async (req, res) => {
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
  console.log(req.body)
  await Admin.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    },
    {
      where: { id: req.params.id }
    }
  ).then(() => {
    res.status(201).json("updated");
  })
  .catch((error) => {
    res.status(409).json({ error });
  });
}

async function updateOrder(req, res) {
  console.log(req.body);
  const order = await Order.update({ state: req.body.state }, { where: { id: req.body.id } });
  res.json({ order });
}

async function updateProducts(req, res) {
  console.log("OK");
  console.log(req.body);
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
async function destroy(req, res) {
  await Admin.destroy({ where: { id: req.body.id } });
}

// Otros handlers...
// ...

module.exports = {
  indexOrders,
  indexProducts,
  index,
  show,
  store,
  login,
  update,
  updateOrder,
  updateProducts,
  destroy,
};
