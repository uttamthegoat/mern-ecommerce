const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  getWishlist,
  removeFromWishlist,
  addToWishlist, // Add this import
} = require('../controllers/wishlistController');

// Get user's wishlist
router.route('/get').get(authMiddleware, getWishlist);

// Remove a product from the wishlist
router.route('/remove').delete(authMiddleware, removeFromWishlist);

// Add a product to the wishlist
router.route('/add').post(authMiddleware, addToWishlist);

module.exports = router;
