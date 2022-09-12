const { Product } = require("../models");
const { Op } = require("sequelize");
const { sequelize } = require("../models/index");
// Display a listing of the resource.
async function show(req, res) {
  const product = await Product.findOne({
    where: {
      slug: req.params.slug,
    },
  });

  res.json(product);
}

// Display the specified resource.
async function index(req, res) {
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
async function random(req, res) {
  const products = await Product.findAll({
    where: { id: { [Op.ne]: req.params.id } },
    order: sequelize.random,
    limit: 4,
  });
  res.json(products);
}

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
  store,
  edit,
  update,
  destroy,
  random,
};
