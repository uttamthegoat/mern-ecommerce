const CustomError = require("../errors/CustomError");
const asyncHandler = require("../middleware/asyncHandler");
const Cart = require("../models/cart");

//getting all rpoducts in the user cart
exports.getAllProductsInUserCart = asyncHandler(async (req, res) => {
  const userCart = await Cart.findOne({ user: req.user._id }).populate(
    "items.product"
  );
  if (!userCart) throw new CustomError(400, false, "users cart not found!");

  res.status(200).json({ success: true, results: userCart });
});

//adding product in to the cart
exports.addToCart = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { productId } = req.params;
  const { price } = req.body;
  const address = req.user.address;

  const userCart = await Cart.findOne({ user: userId });
  if (!userCart) {
    throw new CustomError(400, false, "User's cart not found!");
  }

  userCart.address = address;
  const existingItem = userCart.items.find((item) =>
    item.product.equals(productId)
  );
  if (!existingItem) {
    userCart.items.push({ product: productId });
    userCart.totalPrice += price;
  } else {
    throw new CustomError(400, false, "Product is already added to the cart!");
  }

  await userCart.save();

  res
    .status(200)
    .json({ success: true, message: "Product added to the cart." });
});

//deleting rpoduct from ther cart
exports.deleteProductFromCart = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const productId = req.params.id;
  const { price } = req.params;

  const userCart = await Cart.findOne({ user: userId });
  if (!userCart) {
    throw new CustomError(400, false, "User's cart not found!");
  }

  const existingItemIndex = userCart.items.findIndex((item) =>
    item.product.equals(productId)
  );

  if (existingItemIndex !== -1) {
    userCart.items.splice(existingItemIndex, 1);
    userCart.totalPrice -= price;
    await userCart.save();
    res
      .status(200)
      .json({ success: true, message: "Product removed from the cart." });
  } else {
    res
      .status(404)
      .json({ success: false, message: "Product not found in the cart." });
  }
});
