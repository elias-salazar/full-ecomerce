const { ProductsServices } = require("../services");

const showAllProducts = async (req, res, next) => {
  try {
    const result = await ProductsServices.showAll();
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};
const addProducts = async (req, res, next) => {
  try {
    const product = req.body;
    const result = await ProductsServices.add(product);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};

module.exports = {
  showAllProducts,
  addProducts,
};
