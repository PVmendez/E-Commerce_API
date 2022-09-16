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
    order: sequelize.random(),
    limit: 4,
  });
  res.json(products);
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  // const product = await Product.findByPk(req.params.id);
  // console.log(product.stock);
  const ids = req.body.products.productsId;
  const amount = req.body.amount.productsAmount;
  const product_toBuy = ids.map((id, index) => {
    console.log({ id: id, stockToBuy: amount[index] });
    return { id: id, stockToBuy: amount[index] };
  });
  let hasLess = [];
  let updated;
  const promises = product_toBuy.map(async (condition) => {
    const producto = await Product.findOne({ where: { id: condition.id } });
    console.log("condition", condition);
    console.log("stock", producto);
    if (producto.stock >= condition.stockToBuy) {
      updated = true;
      const newStock = producto.stock - condition.stockToBuy;
      return Product.update({ stock: newStock }, { where: { id: condition.id } });
    } else {
      hasLess = [true, condition.id];
    }
  });
  await Promise.all(promises);
  const products = await Product.findAll({ where: { id: req.body.products.productsId } });
  let productsStock = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].stock <= 0 && !updated) {
      productsStock.push(0);
    } else {
      productsStock.push(1);
    }
  }
  if (productsStock.includes(0)) {
    const product = await Product.findOne({
      where: { id: req.body.products.productsId, stock: { [Op.lte]: 0 } },
      attributes: ["name", "stock"],
    });
    res.json({ error: "stock agotado", product: product });
  } else if (hasLess[0]) {
    let productId = hasLess[1];
    const product = await Product.findOne({ where: { id: productId } });
    res.json({ error: "stock insuficiente", product: product });
  } else {
    res.json({ success: "stock actualizado" });
  }
}

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
