const { UserServices } = require("../services");

const registerUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.register(newUser);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const result = await UserServices.getAll();

    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};
module.exports = {
  registerUser,
  getAllUsers,
};
