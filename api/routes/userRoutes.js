const express = require("express");
const router = express.Router();
const { loginUser, logoutUser,registerUser } = require("../controllers/userController");

router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);

module.exports = router;
