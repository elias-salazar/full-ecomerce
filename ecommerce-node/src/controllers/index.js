const { getAllUsers, registerUser } = require("./users.controllers");
const { showAllProducts, addProducts } = require("./products.controllers");
const {
  getAllOrder,
  newOrder,
  addProductInOrder,
} = require("./order.controllers");
module.exports = {
  getAllUsers,
  registerUser,
  showAllProducts,
  addProducts,
  getAllOrder,
  newOrder,
  addProductInOrder,
};
