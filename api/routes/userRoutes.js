const express = require("express");
const router = express.Router();
const multer= require("multer");
const authMiddleware = require("../middleware/authMiddleware");
const verifyAdmin = require("../middleware/verifyAdmin");
const {
  getUser,
  updateUser,
  getAllUsers,
} = require("../controllers/userController");
const upload = multer();


// get profile
router.route("/get-user").get(authMiddleware, getUser);

// update profile
router.route("/update-user").put(authMiddleware,upload.single("file"), updateUser);

// get all users
router.route("/get-all-users").put(verifyAdmin, authMiddleware, getAllUsers);

module.exports = router;
