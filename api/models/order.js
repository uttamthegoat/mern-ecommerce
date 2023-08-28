import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    orderDate: String,
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: 'Address'
    }
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);
export default Order
