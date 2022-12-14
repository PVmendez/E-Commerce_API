const { Customer, Order } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const orders = await Order.findAll({ where: { customerId: req.auth.id } });
  res.status(200).json({ orders });
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const customer = await Customer.findByPk(req.auth.id, {
    attributes: { exclude: ["id", "password"] },
  });
  const products = req.body;
  const newOrder = await Order.create({
    customerData: customer,
    products: products,
    state: "Pago",
    customerId: req.auth.id,
  });
  res.status(201).json({ msg: "Order creada" });
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
