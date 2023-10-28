const express = require("express");
const router = express.Router();
const {
  loginUser,
  logoutUser,
  registerUser,
  generateOTP,
  verifyOTP,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(authMiddleware, logoutUser);
router.route("/generateOTP").get(generateOTP);
router.route("/verifyOTP").post(verifyOTP);

module.exports = router;
