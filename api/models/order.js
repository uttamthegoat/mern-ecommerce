const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    orderDate: {
      type: Date,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
