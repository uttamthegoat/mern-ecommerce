const CustomError = require("../errors/CustomError");
const asyncHandler = require("../middleware/asyncHandler");
const imageUploadUser = require("../utils/profileImage");
const User = require("../models/users");

// get profile
exports.getUser = asyncHandler(async (req, res) => {
  const id = req.user._id;
  const user = await User.findById(id).select("-password");
  if (!user) throw new CustomError(400, false, "User not found!");
  res.status(200).json({ success: true, user });
});

// update profile
exports.updateUser = asyncHandler(async (req, res) => {
  const { name, gender, phoneNumber, address } = req.body;

  let userImage;
  if (req.file) {
    userImage = await imageUploadUser(req.file);
    if (!userImage) throw new CustomError(400, false, "User image not found!");
  } else {
    userImage: "";
  }
  const user = await User.findOneAndUpdate(
    { _id: req.user.id },
    { $set: { name, gender, userImage, phoneNumber, address } },
    { new: true }
  );
  if (!user) throw new CustomError(400, false, "User profile was not updated");
  res
    .status(200)
    .json({ success: true, message: "Your details are updated", user: user });
});

// get all users
// for admin
exports.getAllUsers = asyncHandler(async (req, res) => {
  const allUsers = await User.find();
  if (!allUsers) throw new CustomError(400, false, "User not found!");
  res.status(200).json({ success: true, allUsers });
});
