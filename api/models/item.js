import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: Number,
  orderState: ["pending", "Out of Delivery", "Shipped", "Delivered"],
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
