const CustomError = require("../errors/CustomError");
const asyncHandler = require("../middleware/asyncHandler");
const Wishlist = require("../models/Wishlist");
const Product = require("../models/Product");
import {} from '../WishList/wishlistApi';

// Get user's wishlist
exports.getWishlist = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const wishlist = await Wishlist.findOne({ user: userId }).populate("items");
  if (!wishlist) {
    throw new CustomError(404, false, "Wishlist not found");
  }

  res.status(200).json({ success: true, data: wishlist });
});

// Add a product to the wishlist
exports.addToWishlist = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { productId } = req.body;

  if (!productId) {
    throw new CustomError(400, false, "Product ID is required");
  }

  // Check if the product exists
  const product = await Product.findById(productId);
  if (!product) {
    throw new CustomError(404, false, "Product not found");
  }

  // Find the user's wishlist and add the product
  let wishlist = await Wishlist.findOne({ user: userId });

  if (!wishlist) {
    wishlist = new Wishlist({ user: userId, items: [] });
  }

  if (wishlist.items.includes(productId.toString())) {
    throw new CustomError(400, false, "Product is already in the wishlist");
  }

  wishlist.items.push(productId);
  await wishlist.save();

  res.status(200).json({ success: true, message: "Product added to wishlist" });
});

// Remove a product from the wishlist
exports.removeFromWishlist = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { productId } = req.body;

  if (!productId) {
    throw new CustomError(400, false, "Product ID is required");
  }

  // Find the user's wishlist and remove the product
  let wishlist = await Wishlist.findOne({ user: userId });

  if (!wishlist || !wishlist.items.includes(productId.toString())) {
    throw new CustomError(400, false, "Product not found in the wishlist");
  }

  wishlist.items = wishlist.items.filter((item) => item.toString() !== productId.toString());
  await wishlist.save();

  res.status(200).json({ success: true, message: "Product removed from wishlist" });
});
