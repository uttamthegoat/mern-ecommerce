import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    },
    price: Number,
    productImage: String,
    productInStock: Number
  },
  { timestamps: true } // This option should be outside the schema definition object
);

const Product = mongoose.model('Product', productSchema);
export default Product
