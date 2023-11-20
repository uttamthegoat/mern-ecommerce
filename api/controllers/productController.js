const CustomError = require("../errors/CustomError");
const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/products");
const uploadImage = require("../utils/imageUpload");

// Create a new product 
exports.createProduct = asyncHandler(async (req, res) => {
  const { name, description, category, price, productInStock } = req.body;

  if (
    !name ||
    !description ||
    !category ||
    !price ||
    !productInStock ||
    !req.file
  ) {
    throw new CustomError(400, false, "Provide Every data!");
  }

  const productImage = await uploadImage(req.file);
  if (!productImage) throw new CustomError(400, false, "Image not found!");

  const product = new Product({
    name,
    description,
    category,
    price,
    productImage,
    productInStock,
  });

  const newProduct = await product.save();
  if (!product) throw new CustomError(400, false, "Product was not saved!");

  res.status(201).json({
    success: true,
    message: "Product created successfully!",
    product: newProduct,
  });
});

// Get a specific product from the list
exports.fetchProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) throw new CustomError(400, false, "Product not found!");
  res.status(200).json({ success: true, product });
});

exports.getCategoryProducts = asyncHandler(async (req, res) => {
  const { category } = req.params;

  const products = await Product.find({ category: category });
  if (!products) throw new CustomError(400, false, "Products were not found!");

  res.status(200).json({ success: true, products });
});

// Update a product
exports.updateProduct = asyncHandler(async (req, res) => {
  const updateFields = req.body;
  const { id } = req.params;

  if (req.file) {
    let productImage = await uploadImage(req.file);
    if (!productImage)
      throw new CustomError(400, false, "Product image not found!");
    updateFields.productImage = productImage;
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { $set: updateFields },
    { new: true }
  );

  res.status(200).json({
    success: true,
    message: "Product has been successfully updated!",
    product: updatedProduct,
  });
});

// Delete a product
exports.deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedProduct = await Product.findByIdAndDelete(id);
  if (!deletedProduct)
    throw new CustomError(400, false, "Product is not found!");

  res.status(200).json({
    success: true,
    message: "Product has been successfully deleted!",
  });
});

// Get all products for admin
exports.getProductsAdmin = asyncHandler(async (req, res) => {
  const products = await Product.find();
  if (!products) throw new CustomError(400, false, "Products not found!");

  res.status(200).json({ success: true, products });
});
