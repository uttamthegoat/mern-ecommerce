const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    totalPrice: { type: Number },
    address: {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
