const { Orders, ProductsInOrders } = require("../models");

class OrderServices {
  static async new(userId, totalPrice) {
    try {
      const result = await Orders.create(userId, totalPrice);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAll(id) {
    try {
      const result = await Orders.findAll({ where: { userId: id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async addPIO(data) {
    try {
      const result = await ProductsInOrders.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async findOrder(id) {
    try {
      const result = await Orders.findOne({
        where: { status: "pending", userId: id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = OrderServices;
