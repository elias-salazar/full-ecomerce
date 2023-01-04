const { OrdersServices } = require("../services");
const { addPIO } = require("../services/order.services");

const newOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await OrdersServices.new(id);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};
const getAllOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await OrdersServices.getAll(id);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
};
const addProductInOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const isOrder = await OrdersServices.findOrder();
    if (isOrder) {
      data.orderId = isOrder.id;
    } else {
      const newOrder = await OrdersServices.create(id);
      data.orderId = newOrder.id;
    }
    const result = await OrdersServices.addPIO(data);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: " ",
    });
  }
};

module.exports = {
  newOrder,
  getAllOrder,
  addProductInOrder,
};
