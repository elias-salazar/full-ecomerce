const { Products } = require("../models");

class ProductsServices {
  static async showAll() {
    try {
      const result = await Products.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async add(product) {
    try {
      const result = await Products.create(product);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async find(id) {
    try {
      const result = await Products.findOne({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = ProductsServices;
