const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      maxlength: 10,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", addressSchema);
