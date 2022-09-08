const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      id: 1,
      name: "Pistazie",
      description:
        "Delicada crema de pistacho recubierta por una capa de chocolate con intensidad balanceada",
      image: "Bombon_15.jpg",
      price: 2.35,
      stock: 20,
      popular: true,
      slug: "Pistazie",
    },
    {
      id: 2,
      name: "Karamel",
      description: "Chocolate con leche con corazón de dulce de leche",
      image: "Bombon_13.jpg",
      price: 4.53,
      stock: 20,
      popular: false,
      slug: "Karamel",
    },
    {
      id: 3,
      name: "Yam",
      description:
        "Chocolate con leche al 44% de cacao con relleno de crema de batata",
      image: "Bombon_12.jpg",
      price: 3.98,
      stock: 20,
      popular: false,
      slug: "Yam",
    },
    {
      id: 4,
      name: "Minze",
      description:
        "Combinación de chocolate semi-amargo y pasta de menta con toque de licor",
      image: "Bombon_9.jpg",
      price: 2.58,
      stock: 20,
      popular: false,
      slug: "Minze",
    },
    {
      id: 5,
      name: "Kokosnuss",
      description:
        "Combinación de chocolates con relleno exótico de coco",
      image: "Bombon_8.jpg",
      price: 3.29,
      stock: 20,
      popular: true,
      slug: "Kokosnuss",
    },
    {
      id: 6,
      name: "Kirshe",
      description:
        "Cubierta de chocolate con leche al 44% y corazón de cerezas al marrasquino",
      image: "Bombon_7.jpg",
      price: 2.11,
      stock: 20,
      popular: false,
      slug: "Pistazie",
    },
    {
      id: 7,
      name: "Zapallo",
      description:
        "Chocolate con leche con pequeños trozos de zapallo",
      image: "Bombon_6.jpg",
      price: 1.95,
      stock: 20,
      popular: true,
      slug: "Zapallo",
    },
    {
      id: 8,
      name: "Feige",
      description:
        "Chocolate Semi-amargo y relleno de higo",
      image: "Bombon_5.jpg",
      price: 4.65,
      stock: 20,
      popular: false,
      slug: "Feige",
    },
    {
      id: 9,
      name: "Zitrone",
      description:
        "Combinación de chocolate blanco con pasta de limón",
      image: "Bombon_4.jpg",
      price: 4.10,
      stock: 20,
      popular: false,
      slug: "Zitrone",
    },
    {
      id: 10,
      name: "Beeren",
      description:
        "Chocolate blanco con fina capa de chocolate al 44% de cacao y relleno de delicias del bosque",
      image: "Bombon_3.jpg",
      price: 1.20,
      stock: 20,
      popular: false,
      slug: "Beeren",
    },
    {
      id: 11,
      name: "Zucker Frei",
      description:
        "Exquisito chocolate blanco o semi amargo sin azúcar",
      image: "Bombon_2.jpg",
      price: 4.39,
      stock: 20,
      popular: true,
      slug: "Zucker",
    },
    {
      id: 12,
      name: "Orange",
      description:
        "Fina mezcla de chocolate con leche y chocolate con trozos de cáscara de naranja",
      image: "Bombon_1.jpg",
      price: 3.81,
      stock: 20,
      popular: false,
      slug: "Orange",
    },
    {
      id: 13,
      name: "Kaffee",
      description:
        "Relleno de mousse de café sumado al toque de 3 licores Premium con cobertura de chocolate con leche al 44%",
      image: "Bombon_14.jpg",
      price: 1.86,
      stock: 20,
      popular: false,
      slug: "Kaffee",
    },
    {
      id: 14,
      name: "Orangelikör",
      description:
        "Chocolate semi-amargo con centro de pasta de naranja al Contreau",
      image: "Bombon_11.jpg",
      price: 1.55,
      stock: 20,
      popular: false,
      slug: "Orangelikor",
    },
    {
      id: 15,
      name: "Mandel",
      description:
        "Mezcla de Chocolates y en su corazón una almendra tostada con crema aromatizada al Amaretto",
      image: "Bombon_10.jpg",
      price: 3.06,
      stock: 20,
      popular: false,
      slug: "Mandel",
    },
    {
      id: 16,
      name: "Haselnuss",
      description:
        "Crocante de avellana caramelizada recubierta con fina pasta de avellanas y cobertura de chocolate con leche al 44% cacao",
      image: "Bombon_16.jpg",
      price: 1.01,
      stock: 20,
      popular: false,
      slug: "Haselnuss",
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
