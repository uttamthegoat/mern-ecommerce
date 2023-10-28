const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    userImage: {
      type: String,
      default: "",
      trim: true,
    },
    gender: {
      type: String,
      default: "",
      trim: true,
    },
    phoneNumber: {
      type: String,
      maxlength: 10,
      trim: true,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    dob:{
      type:Date
    }
  },
  { timestamps: true }
);

//hasing password using gensalt
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPasswords = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
