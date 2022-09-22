const { Product } = require("../models");
const { Op } = require("sequelize");
const { sequelize } = require("../models/index");
const { mercadopago } = require("../utils/mercadopago");
// Display a listing of the resource.
async function show(req, res) {
  const product = await Product.findOne({
    where: {
      slug: req.params.slug,
    },
  });

  res.status(200).json(product);
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
  console.log(queries)
  const products = await Product.findAll({ where: queries });
  res.status(200).json(products);
}

// Show the form for creating a new resource
async function random(req, res) {
  const products = await Product.findAll({
    where: { id: { [Op.ne]: req.params.id } },
    order: sequelize.random(),
    limit: 4,
  });
  res.status(200).json(products);
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  const ids = req.body.products.productsId;
  const amount = req.body.amount.productsAmount;
  const product_toBuy = ids.map((id, index) => {
    return { id: id, stockToBuy: amount[index] };
  });
  let hasLess = [];
  let updated;
  product_toBuy.map(async (condition) => {
    const producto = await Product.findOne({ where: { id: condition.id } });
    if (producto.stock >= condition.stockToBuy) {
      updated = true;
      const newStock = producto.stock - condition.stockToBuy;
      await Product.update({ stock: newStock }, { where: { id: condition.id } });
    } else {
      hasLess = [true, condition.id];
    }
  });
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
    res.status(404).json({ error: "stock agotado", product: product });
  } else if (hasLess[0]) {
    let productId = hasLess[1];
    const product = await Product.findOne({ where: { id: productId } });
    res.status(404).json({ error: "stock insuficiente", product: product });
  } else {
    res.status(200).json({ success: "stock actualizado" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...
async function comprar(req, res) {
  const price = req.body.data.totalPrice;
  const user = req.body.data.user;
  const cart = req.body.data.items;
  let preference = {
    transaction_amount: price * 1.15,
    binary_mode: true,
    payer: {
      name: user.firstname,
      surname: user.lastname,
      email: user.email,
      address: {
        zip_code: user.postalCode,
        street_name: user.city,
      },
    },
    items: [
      {
        picture_url: cart[0].product.image,
        title: cart[0].product.name,
        unit_price: cart[0].product.price,
        quantity: 1,
        description: cart[0].product.description,
      },
    ],
    back_urls: {
      success: "http://localhost:3000/",
      failure: "http://localhost:3000/products",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        global: response.body.data.id,
      });
    })
    .catch(function (err) {
      res.send(err);
    });
}

module.exports = {
  index,
  show,
  store,
  edit,
  update,
  destroy,
  random,
  comprar,
};
