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
} = require("../controllers/productControllers");
const upload = multer();

router
  .route("/create-product")
  .post(authMiddleware, upload.single("image"), createProduct);
router.route("/all-products").get(authMiddleware, getProducts);
router.route("/fetch-product").get(authMiddleware, fetchProduct);
router.route("/edit-product").put(authMiddleware, updateProduct);
router.route("/delete-product").delete(authMiddleware, deleteProduct);

module.exports = router;
