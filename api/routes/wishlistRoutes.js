const express = require('express');
const asyncHandler = require('../middleware/asyncHandler');
const protect = require('../middleware/protect');
const CustomError = require('../errors/CustomError');
const Wishlist = require('../models/Wishlist');

const router = express.Router();

// Get user's wishlist
router.get('/wishlist', protect, asyncHandler(async (req, res) => {
  // Fetch the user's wishlist
  const wishlist = await Wishlist.findOne({ user: req.user._id }).populate('items');
  if (!wishlist) {
    throw new CustomError(404, false, "Wishlist not found");
  }

  res.status(200).json({ success: true, data: wishlist });const express = require('express');
  const asyncHandler = require('../middleware/asyncHandler');
  const protect = require('../middleware/protect');
  const CustomError = require('../errors/CustomError');
  const Wishlist = require('../models/Wishlist');
  
  const router = express.Router();
  
  // Get user's wishlist
  router.get('/wishlist', protect, asyncHandler(async (req, res) => {
    // Fetch the user's wishlist
    const wishlist = await Wishlist.findOne({ user: req.user._id }).populate('items');
    if (!wishlist) {
      throw new CustomError(404, false, "Wishlist not found");
    }
  
    res.status(200).json({ success: true, data: wishlist });
  }));
  
  // Add a product to the wishlist
  router.post('/wishlist/add', protect, asyncHandler(async (req, res) => {
    const { productId } = req.body;
    if (!productId) {
      throw new CustomError(400, false, "Product ID is required");
      }
  
    // Find the user's wishlist and add the product
    let wishlist = await Wishlist.findOne({ user: req.user._id });
    if (!wishlist) {
      wishlist = new Wishlist({ user: req.user._id, items: [] });
    }
  
    if (wishlist.items.includes(productId.toString())) {
      throw new CustomError(400, false, "Product is already in the wishlist");
    }
  
    wishlist.items.push(productId);
    await wishlist.save();
  
    res.status(200).json({ success: true, message: "Product added to wishlist" });
  }));
  
  // Remove a product from the wishlist
  router.delete('/wishlist/remove', protect, asyncHandler(async (req, res) => {
    const { productId } = req.body;
    if (!productId) {
      throw new CustomError(400, false, "Product ID is required");
    }
  
    // Find the user's wishlist and remove the product
    let wishlist = await Wishlist.findOne({ user: req.user._id });
    if (!wishlist || !wishlist.items.includes(productId.toString())) {
      throw new CustomError(400, false, "Product not found in the wishlist");
    }
  
    wishlist.items = wishlist.items.filter((item) => item.toString() !== productId.toString());
    await wishlist.save();
  
    res.status(200).json({ success: true, message: "Product removed from wishlist" });
  }));
  
  module.exports = router;
  
}));

// Add a product to the wishlist
router.post('/wishlist/add', protect, asyncHandler(async (req, res) => {
  const { productId } = req.body;
  if (!productId) {
    throw new CustomError(400, false, "Product ID is required");
  }

  // Find the user's wishlist and add the product
  let wishlist = await Wishlist.findOne({ user: req.user._id });
  if (!wishlist) {
    wishlist = new Wishlist({ user: req.user._id, items: [] });
  }

  if (wishlist.items.includes(productId.toString())) {
    throw new CustomError(400, false, "Product is already in the wishlist");
  }

  wishlist.items.push(productId);
  await wishlist.save();

  res.status(200).json({ success: true, message: "Product added to wishlist" });
}));

// Remove a product from the wishlist
router.delete('/wishlist/remove', protect, asyncHandler(async (req, res) => {
  const { productId } = req.body;
  if (!productId) {
    throw new CustomError(400, false, "Product ID is required");
  }

  // Find the user's wishlist and remove the product
  let wishlist = await Wishlist.findOne({ user: req.user._id });
  if (!wishlist || !wishlist.items.includes(productId.toString())) {
    throw new CustomError(400, false, "Product not found in the wishlist");
  }

  wishlist.items = wishlist.items.filter((item) => item.toString() !== productId.toString());
  await wishlist.save();

  res.status(200).json({ success: true, message: "Product removed from wishlist" });
}));

module.exports = router;