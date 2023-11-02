const CustomError = require("../errors/CustomError");
const asyncHandler = require("../middleware/asyncHandler");
const Order = require("../models/order");

exports.getAllOrders = asyncHandler(async (req, res) => {
  const id = req.user._id;
  console.log(req.user);
  

  const allOrders = await Order.find({ user: id }).populate("product");
  if (!allOrders) throw new CustomError(400, false, "Orders were not found!");

  res.status(200).json({ success: true, results: allOrders });
});

exports.getOrder = asyncHandler(async (req, res) => {
  const { id } = req.body;

  const order = await Order.findById(id).populate("product");
  if (!order) throw new CustomError(400, false, "Order Not found!");

  res.status(200).json({ success: true, order });
});

exports.placeOrder = asyncHandler(async (req, res) => {
  const { orderDate, product, quantity } = req.body;
  const id = req.user._id;

  const newOrder = await Order.create({
    user: id,
    orderDate,
    product,
    quantity,
  });
   if(!newOrder) throw new CustomError(400, false, "Order not placed!");

   res.status(200).json({success:true, message: " Your order has been placed! Check your orders."})
});
