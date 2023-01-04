const {
  Users,
  Cart,
  Categories,
  Orders,
  Products,
  ProductsInOrders,
  ProductInCart,
} = require("./index");
const initModels = () => {
  Cart.belongsTo(Users, { foreignKey: "user_id" });
  Users.hasOne(Cart, { foreignKey: "user_id" });

  Products.belongsTo(Users, { foreignKey: "user_id" });
  Users.hasMany(Products, { foreignKey: "user_id" });

  Orders.belongsTo(Users, { foreignKey: "user_id" });
  Users.hasMany(Orders, { foreignKey: "user_id" });

  Products.belongsTo(ProductInCart, { foreignKey: "product_id" });
  ProductInCart.hasOne(Products, { foreignKey: "product_id" });

  ProductInCart.belongsTo(Cart, { foreignKey: "cart_id" });
  Cart.hasMany(ProductInCart, { foreignKey: "cart_id" });

  Products.belongsTo(ProductsInOrders, { foreignKey: "product_id" });
  ProductsInOrders.hasOne(Products, { foreignKey: "product_id" });

  ProductsInOrders.belongsTo(Orders, { foreignKey: "order_id" });
  Orders.hasMany(ProductsInOrders, { foreignKey: "order_id" });

  Products.belongsTo(Categories, { foreignKey: "category_id" });
  Categories.hasMany(Products, { foreignKey: "category_id" });
};
module.exports = initModels;
