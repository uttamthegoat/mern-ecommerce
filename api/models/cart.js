import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    totalPrice: Number,
    address: {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
