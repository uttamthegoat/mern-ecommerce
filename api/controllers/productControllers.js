const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/Product");
const uploadImage = require("../utils/imageUpload");

// Create a new product
const createProduct = asyncHandler(async (req, res) => {
  const { name, description, category, price, productInStock } = req.body;

  if (
    !name ||
    !description ||
    !category ||
    !price ||
    !productInStock ||
    !req.file
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid data provided" });
  }

  const productImage = await uploadImage(req.file);

  const product = new Product({
    name,
    description,
    category,
    price,
    productImage,
    productInStock,
  });

  const newProduct = await product.save();

  res.status(201).json({
    success: true,
    message: "Product successfully added!",
    product: newProduct,
  });
});

// Get all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().populate("category");
  res.status(200).json({ success: true, products });
});

// Update a product
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(200).json({ success: true, product: updatedProduct });
});

// Delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedProduct = await Product.findByIdAndDelete(id);

  res.status(200).json({ success: true, product: deletedProduct });
});

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
