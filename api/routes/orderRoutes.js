const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const verifyAdmin = require("../middleware/verifyAdmin");
const {
  getAllOrders,
  getOrder,
  placeOrder,
  cancelOrder,
  changeStatus
} = require("../controllers/orderController");

// get all orders of a customer
router.route("/get-all-orders").get(authMiddleware, getAllOrders);

// get a specific order of a customer
router.route("/get-order/:id").get(authMiddleware, getOrder);

// place an order of a customer
router.route("/place-order").post(authMiddleware, placeOrder);

// delete a specific order of a customer if it is not delivered
router.route("/cancel-order/:id").delete(authMiddleware, cancelOrder);

// set status of an order : only admin
router.route("/order-status").put(authMiddleware, verifyAdmin, changeStatus);

module.exports = router;
