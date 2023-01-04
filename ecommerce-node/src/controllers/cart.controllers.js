const { CartServices, OrderServices } = require("../services");

const showCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cartId = await CartServices.findCart(id);
    const result = await res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: " ",
    });
  }
};
const addProductInCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = {
      userId: id,
      quantity: req.body.quantity,
      productId: req.body.id,
    };
    const dataOrder = {
      userId: id,
      quantity: req.body.quantity,
      productId: req.body.id,
    };

    const { price } = await ProductServices.getPrice(data.productId);
    let totalPrice = data.quantity * price;

    const isCart = await CartServices.findCart(id);
    const isOrder = await OrderServices.findOrder(id);

    if (!isCart) {
      const cart = await CartServices.new(id, totalPrice);
      data.cartId = cart.id;
      const order = await CartServices.new(id, totalPrice);
      dataOrder.orderId = order.id;
    } else {
      data.cartId = isCart.id;
      dataOrder.orderId = isOrder.id;
    }
    
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: " ",
    });
  }
};
module.exports = {
  showCart,
};
