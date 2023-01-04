const Users = require("./users.models");
const Orders = require("./orders.models");
const Cart = require("./cart.models");
const Categories = require("./categories.models");
const Products = require("./products.models");
const ProductsInOrders = require("./productsInOrders.models");
const ProductInCart = require("./productInCart.models");

module.exports = {
  Users,
  Orders,
  Products,
  Cart,
  ProductsInOrders,
  Categories,
  ProductInCart,
};
