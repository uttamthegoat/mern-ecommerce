const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
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

module.exports = mongoose.model('Product', productSchema);
