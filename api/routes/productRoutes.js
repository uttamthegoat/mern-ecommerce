const express = require("express");
const multer = require("multer");
const router = express.Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const upload = multer();

router.route("/create-product").post(upload.single("image"), createProduct);
router.route("/get-products").get(getProducts);
router.route("/edit-product").put(updateProduct);
router.route("/delete-product").delete(deleteProduct);

module.exports = router;
