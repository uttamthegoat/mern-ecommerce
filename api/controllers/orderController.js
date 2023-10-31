const CustomError = require("../errors/CustomError");
const asyncHandler = require("../middleware/asyncHandler");
const Order = require("../models/order");
const Product = require("../models/products");

exports.getAllOrders = asyncHandler(async (req, res) => {
  const id = req.user._id;

  const allOrders = await Order.find({ user: id }).populate("product");
  if (!allOrders) throw new CustomError(400, false, "Orders were not found!");

  res.status(200).json({ success: true, orders: allOrders });
});

exports.getOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const order = await Order.findById(id).populate("product");
  if (!order) throw new CustomError(400, false, "Order Not found!");

  res.status(200).json({ success: true, order });
});

exports.placeOrder = asyncHandler(async (req, res) => {
  const { orderDate, product, quantity } = req.body;
  const id = req.user._id;
  const { address } = req.user;

  const newOrder = await Order.create({
    user: id,
    orderDate,
    product,
    quantity,
    address,
  });
  if (!newOrder) throw new CustomError(400, false, "Order not placed!");

  // reducing the respective product in stock
  const orderedProduct = await Product.findById(product);
  if (!orderedProduct) throw new CustomError(400, false, "Product not found!");

  orderedProduct.productInStock = orderedProduct.productInStock - quantity;
  const updatedProduct = await product.save();
  if (!updatedProduct) throw new CustomError(400, false, "Product not found!");

  res.status(200).json({
    success: true,
    id: newOrder._id,
    message: " Your order has been placed!.",
  });
});

exports.cancelOrder = asyncHandler(async (req, res) => {
  const { id } = req.body;

  const order = await Order.findById(id);
  if (!order) throw new CustomError(400, false, "Order not found!");

  const orderedProduct = await Product.findById(order.product);
  if (!orderedProduct) throw new CustomError(400, false, "Product not found!");

  orderedProduct.productInStock += order.quantity;

  await orderedProduct.save();
  await order.remove();

  res
    .status(200)
    .json({ success: true, message: "Your order has been cancelled!" });
});
