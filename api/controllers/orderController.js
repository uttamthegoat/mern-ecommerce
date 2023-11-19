const { ObjectId } = require("mongoose").Types;
const CustomError = require("../errors/CustomError");
const asyncHandler = require("../middleware/asyncHandler");
const Order = require("../models/order");
const Product = require("../models/products");

//getting all orders 
exports.getAllOrders = asyncHandler(async (req, res) => {
  const id = req.user._id;

  const allOrders = await Order.find({ user: id }).populate("product");
  if (!allOrders) throw new CustomError(400, false, "Orders were not found!");

  const reversedOrders = allOrders.reverse();

  res.status(200).json({ success: true, orders: reversedOrders });
});

// getting a single order 
exports.getOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const order = await Order.findById(id).populate("product");
  if (!order) throw new CustomError(400, false, "Order Not found!");

  res.status(200).json({ success: true, order });
});

//order placement
exports.placeOrder = asyncHandler(async (req, res) => {
  const { orderDate, product, quantity, price } = req.body;
  const id = req.user._id;
  const { address } = req.user;
  if (address === "")
    throw new CustomError(400, false, "Update your address to order anything!");

  const productObjectId = new ObjectId(product);

  // reducing the respective product in stock
  const orderedProduct = await Product.findById(product);
  if (!orderedProduct)
    throw new CustomError(400, false, "Product was not found!");

  orderedProduct.productInStock = orderedProduct.productInStock - quantity;
  const updatedProduct = await orderedProduct.save();
  if (!updatedProduct)
    throw new CustomError(400, false, "Product not updated!");

  const newOrder = await Order.create({
    user: id,
    orderDate: new Date().toLocaleDateString(),
    product: productObjectId,
    quantity,
    address,
    price,
  });
  if (!newOrder) throw new CustomError(400, false, "Order not placed!");

  res.status(200).json({
    success: true,
    id: newOrder._id,
    message: " Your order has been placed!.",
  });
});

//order cancel
exports.cancelOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const order = await Order.findById(id);
  if (!order) throw new CustomError(400, false, "Order not found!");

  const orderedProduct = await Product.findById(order.product);
  if (!orderedProduct) throw new CustomError(400, false, "Product not found!");

  orderedProduct.productInStock += order.quantity;

  await orderedProduct.save();
  const deletedOrder = await Order.findByIdAndRemove(id);
  if (!deletedOrder) throw new CustomError(400, false, "Order not found.");

  res
    .status(200)
    .json({ success: true, message: "Your order has been cancelled!" });
});

exports.changeStatus = asyncHandler(async (req, res) => {
  const { id, state } = req.body;

  const updatedOrder = await Order.findByIdAndUpdate(
    id,
    { orderState: state },
    { new: true }
  );

  res
    .status(200)
    .json({ success: true, message: "Status Updated", order: updatedOrder });
});
