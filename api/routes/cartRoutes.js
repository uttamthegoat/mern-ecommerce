const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const{
    getAllProductsInUserCart,
    addToCart,
    deleteProductFromCart
}=require("../controllers/cartController");

// get all cart of a customer
router.route("/get-cart/id").get(authMiddleware, getAllProductsInUserCart);

// add all orders of a customer
router.route("/add-cart").post(authMiddleware, addToCart);

// delete all orders of a customer
router.route("/delete-cart/id").delete(authMiddleware, deleteProductFromCart);

module.exports = router;