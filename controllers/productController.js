const { Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const product = await Product.findByPk(req.params.id);

  res.json(product);
}

// Display the specified resource.
async function show(req, res) {
  const products = await Product.findAll();

  console.log(products);
  res.json(products);
}

async function showPopular(req, res) {
  const products = await Product.findAll({ where: { popular: 1 } });

  res.json(products);
}

async function showCategory(req, res) {
  if (req.params.id == 0) {
    const products = await Product.findAll();
    res.json(products);
  } else {
    const products = await Product.findAll({ where: { CategoryId: req.params.id } });
    res.json(products);
  }
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

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
  showPopular,
  showCategory,
  create,
  store,
  edit,
  update,
  destroy,
};
