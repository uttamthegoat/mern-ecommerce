const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { search, filterProduct } = require("../controllers/searchController");

// search for a product using name or description
// http://localhost:5001/api/search/products?query=searchTerm
router.route("/products").get(authMiddleware, search);

// filter products
// http://localhost:5001/api/search/filter-products?query=searchTerm
router.route("/filter-products").post(authMiddleware, filterProduct);

module.exports = router;
