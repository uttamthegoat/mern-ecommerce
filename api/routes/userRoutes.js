const express = require("express");
const router = express.Router();
const { loginUser, logoutUser,registerUser } = require("../controllers/userController");
const authMiddleware = require('../middleware/authMiddleware');

router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(authMiddleware,logoutUser);

module.exports = router;
