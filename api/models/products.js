const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    productImage: {
      type: String,
      trim: true,
      required: true,
    },
    productInStock: {
      type: Number,
      trim: true,
      required: true,
    },
  },
  { timestamps: true } // This option should be outside the schema definition object
);

module.exports = mongoose.model("Product", productSchema);
