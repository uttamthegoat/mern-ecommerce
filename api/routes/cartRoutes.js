const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const{
    getAllProductsInUserCart,
    addToCart,
    deleteProductFromCart
}=require("../controllers/cartController");

// get all cart of a customer
router.route("/get-cart").get(authMiddleware, getAllProductsInUserCart);

// add all orders of a customer
router.route("/add-cart/:productId").post(authMiddleware, addToCart);

// delete all orders of a customer
router.route("/delete-cart/:id/:price").delete(authMiddleware, deleteProductFromCart);

module.exports = router;