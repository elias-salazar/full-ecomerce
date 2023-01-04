const { Users } = require("../models");
class UserServices {
  static async register(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UserServices;
