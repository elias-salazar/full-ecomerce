const db = require("../utils/database");
const { Users, Products, Categories } = require("../models");
const initModels = require("../models/initModels");

initModels();

const users = [
  {
    firstname: "María",
    lastname: "Godoy",
    email: "maria@gmail.com",
    password: "1234",
    profileImage: "0000000000",
  },
  {
    firstname: "Germán ",
    lastname: "Silva",
    email: "ger@hotmail.com",
    password: "123456",
    profileImage: "5599887744",
  },
  {
    firstname: "Jose",
    lastname: "Tejero",
    email: "jose@email.com",
    password: "1234",
    profileImage: "9999999999",
  },
];

const categories = [
  {
    name: "electronica",
  },
  {
    name: "hogar",
  },
  {
    name: "indumentaria",
  },
];
const products = [
  {
    name: "samsung galaxy",
    description: "celular ultimo modelo 2022",
    availabreQty: 4,
    price: 1234,
    categoryId: 1,
    userId: 1,
  },
  {
    name: "heladera xs",
    description: "heladera especial para mantener cosas frescas",
    availabreQty: 3,
    price: 123456,
    categoryId: 2,
    status: "availible",
    userId: 2,
  },
  {
    name: "campera",
    description: "para abrigarse",
    availabreQty: 5,
    price: 120,
    categoryId: 3,
    userId: 3,
  },
];

db.sync({ force: true }).then(() => {
  console.log("Sinronizado");
  users.forEach(async (user) => await Users.create(user));
  setTimeout(() => {
    categories.forEach(async (category) => await Categories.create(category));
  }, 100);
  setTimeout(() => {
    products.forEach(async (product) => await Products.create(product));
  }, 200);
});
