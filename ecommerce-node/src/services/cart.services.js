const { Cart, ProductsInCart } = require("../models");

class CartServices {
  static async new(id, totalPrice) {
    try {
      const result = await Cart.create(id, totalPrice);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Cart.destroy({ where: { userId: id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async findCart(userId) {
    try {
      const result = await Cart.findOne({ where: { userId } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async addPIC() {
    try {
      const result = await ProductsInCart.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async showPIC(id) {
    try {
      const result = await ProductsInCart.findAll({ where: { cartId: id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices;
