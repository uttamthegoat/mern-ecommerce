const express = require("express");
const multer = require("multer");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  fetchProduct,
  getProductsAdmin,
  getCategoryProducts,
} = require("../controllers/productController");
const verifyAdmin = require("../middleware/verifyAdmin");
const upload = multer();

// create a product
router
  .route("/create-product")
  .post(authMiddleware, verifyAdmin, upload.single("file"), createProduct);

//get all products:  https://localhost:5002/api/products/get-products/:fashion
router
  .route("/get-products/:category")
  .get(authMiddleware, getCategoryProducts);

//get all products for admin
router
  .route("/all-products-a")
  .get(authMiddleware, verifyAdmin, getProductsAdmin);

// fetch a particular product
router.route("/fetch-product/:id").get(authMiddleware, fetchProduct);

// edit a product
router
  .route("/edit-product/:id")
  .put(authMiddleware, verifyAdmin, upload.single("file"), updateProduct);

// delete a product
router
  .route("/delete-product/:id")
  .delete(authMiddleware, verifyAdmin, deleteProduct);

module.exports = router;
