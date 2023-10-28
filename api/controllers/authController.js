const User = require("../models/users");
const asyncHandler = require("../middleware/asyncHandler");
const CustomError = require("../errors/CustomError");
const generateToken = require("../utils/generateToken");

// Register User
//@route POST api/auth/signup
exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  //checking if the user exists
  if (userExists)
    throw new CustomError(401, false, "User already exists. Please Login!");

  // If there are no users yet, make this user an admin
  const isFirstUser = (await User.countDocuments({})) === 0;

  // do not generate token, instead implement otp generation and verification
  const user = await User.create({
    name,
    email,
    password,
    isAdmin: isFirstUser,
  });

  if (user) {
    // generateToken(res, user);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    throw new CustomError(500, false, "Invalid user");
  }
});

//generate token
//@route POST api/auth/generateOTP
exports.generateOTP = asyncHandler(async (req, res) => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  //send this otp code to the email as planned
  res.json({ otp });
})

//generate token
//@route POST api/auth/verifyOTP
exports.verifyOTP = asyncHandler(async (req, res) => {
  const generatedOTP = generateOTP(); // Generate a random OTP
  const receivedOTP = req.body.otp; // Get the OTP received from the user

  // Check if the received OTP matches the generated OTP
  if (receivedOTP === generatedOTP) {
    sendVerificationEmail(req.body.email);
    res.send('Email verified');
  } else {
    // OTPs do not match
    res.send('OTP verification failed');
  }
})

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
