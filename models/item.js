const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: Number,
  orderState: [
    'pending', 'Out of Delivery', 'Shipped', 'Delivered'
  ]
});

module.exports = mongoose.model('Item', itemSchema);
