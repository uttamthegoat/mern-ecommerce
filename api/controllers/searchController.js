const CustomError = require("../errors/CustomError");
const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/products");

exports.search = asyncHandler(async (req, res) => {
  const { query } = req.query;
  const products = await Product.find({
    $or: [
      { name: { $regex: query, $options: "i" } },
      { description: { $regex: query, $options: "i" } },
      { category: { $regex: query, $options: "i" } },
    ],
  });
  if (!products) throw new CustomError(400, false, "No products were found!");

  res.status(200).json({ success: true, products });
});

exports.filterProduct = asyncHandler(async (req, res) => {
  const { query } = req.query;
  const { category, minPrice, maxPrice, sort } = req.body;

  const filters = {
    category: category || { $exists: true },
    price: {
      $gte: minPrice || 0,
      $lte: maxPrice || Number.MAX_SAFE_INTEGER,
    },
  };

  const sortOption = { price: 1 };
  if (sort === 0) {
    sortOption.price = 1;
  } else if (sort === 1) {
    sortOption.price = -1;
  }

  
  if (query) {
    filters.$or = [
      { name: { $regex: query, $options: "i" } },
      { description: { $regex: query, $options: "i" } },
    ];
  }

  const filteredProducts = await Product.find(filters).sort(sortOption);
  if (!filteredProducts)
    throw new CustomError(400, false, "Products were not found!");

  res.status(200).json({ success: true, products: filteredProducts });
});
