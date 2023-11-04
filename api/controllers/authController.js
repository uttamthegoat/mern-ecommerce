const User = require("../models/users");
const asyncHandler = require("../middleware/asyncHandler");
const CustomError = require("../errors/CustomError");
const generateToken = require("../utils/generateToken");
const generateMail = require("../utils/generateMail");
const Wishlist = require("../models/wishlist");
const Cart = require("../models/cart");
let globalOTP;

// Register User
//@route POST api/auth/signup
exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, gender, phoneNumber } = req.body;

  const userExists = await User.findOne({ email });
  //checking if the user exists
  if (userExists)
    throw new CustomError(
      401,
      false,
      "You have already registered. Please Sign in!"
    );

  // If there are no users yet, make this user an admin
  const isFirstUser = (await User.countDocuments({})) === 0;

  const user = await User.create({
    name,
    email,
    password,
    gender: gender.toLowerCase(),
    phoneNumber,
    isAdmin: isFirstUser,
  });

  const userWishlist = await Wishlist.create({
    user: user._id,
    items: [],
  });

  const userCart = await Cart.create({
    user: user._id,
    totalPrice: 0,
    address: "",
    items: [],
  });

  if (user) {
    res.status(201).json({
      success: true,
      message: "Signup Successfull,Please Sign in!",
    });
  } else {
    throw new CustomError(500, false, "Invalid user");
  }
});

//generate token
//@route POST api/auth/generate-otp
exports.generateOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (email === "")
    throw new CustomError(400, false, "Enter your email first!");
  const otp = Math.floor(100000 + Math.random() * 900000);
  globalOTP = otp.toString();
  //send this otp code to the email as planned
  generateMail(email, otp);
  res.json({ success: true, message: "Check your mail for OTP." });
});

//verify token
//@route POST api/auth/verify-otp
exports.verifyOTP = asyncHandler(async (req, res) => {
  const receivedOTP = req.body.otp;

  // Check if the received OTP matches the generated OTP
  if (receivedOTP === globalOTP) {
    res.status(200).json({
      success: true,
      message: "Email Verified! Proceed to signup.",
    });
  } else {
    throw new CustomError(400, false, "E-mail verification failed!");
  }
});

//Login User
//@route POST api/auth/login
exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new CustomError(401, false, "Please register first!");

  const comparePassword = await user.matchPasswords(password);
  if (!comparePassword)
    throw new CustomError(401, false, "Password Incorrect! Try again.");
  generateToken(res, user._id);
  res.status(201).json({
    success: true,
    _id: user._id,
    name: user.name,
    email: user.email,
    message: "Login successfull!",
  });
});

//logout user
//@route POST api/auth/logout
exports.logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("access_token", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ success: true, message: "Logged out successfully!" });
});
