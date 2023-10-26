const express = require("express");
const multer = require("multer");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  fetchProduct,
} = require("../controllers/productController");
const products = require("../models/products");
const verifyAdmin = require('../middleware/verifyAdmin');
const upload = multer();

// create a product
router
.route("/create-product")
.post(authMiddleware,verifyAdmin, upload.single("image"), createProduct);

//get all products:  https://localhost:5002/api/products/all-products?page=1&pageSize=1
router.route("/all-products").get(authMiddleware, getProducts);

// fetch a particular product
router.route("/fetch-product").get(authMiddleware, fetchProduct);

// edit a product
router.route("/edit-product").put(authMiddleware, updateProduct);

// delete a product
router.route("/delete-product").delete(authMiddleware, deleteProduct);

module.exports = router;
