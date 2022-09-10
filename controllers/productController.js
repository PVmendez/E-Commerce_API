const { Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const product = await Product.findOne({
    where: {
      slug: req.params.key,
    },
  });

  res.json(product);
}

// Display the specified resource.
async function show(req, res) {
  const queries = {};
  if (req.query.popular) {
    queries.popular = 1;
  }
  if (req.query.category) {
    queries.CategoryId = req.query.category;
  }
  const products = await Product.findAll({ where: queries });
  res.json(products);
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
  create,
  store,
  edit,
  update,
  destroy,
};
