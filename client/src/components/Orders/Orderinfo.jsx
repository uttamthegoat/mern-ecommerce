import React from "react";
import { get_Order, cancel_Order } from "./apiCall";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

const OrderInfo = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [order, setOrder] = React.useState({
    orderDate: "",
    product: {},
    quantity: 0,
    orderState: "",
    address: "",
    price: 0,
  });

  React.useEffect(() => {
    get_Order(id, setOrder, navigate, dispatch);
  }, []);

  const cancelOrder = () => {
    cancel_Order(id, navigate, dispatch);
  };

  return (
    <div className="container mt-3 md:my-8 px-4 mx-auto">
      <div className="border-b-2 border-gray-600 mb-4 p-4">
        <h2 className="text-2xl font-semibold text-center">Order Details</h2>
      </div>
      <div className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 shadow-lg bg-gray-100 md:mx-auto">
            <LazyLoadImage
              src={order.product.productImage}
              alt="Order Image"
              className="w-full h-auto md:w-80 lg:w-96"
            />
          </div>
          <div className="border p-4 shadow-lg bg-gray-100 text-base md:text-lg lg:text-xl">
            <h3 className="text-xl md:text-2xl mb-4 text-center">
              {order.product.name}
            </h3>
            <p className="mb-2">
              <span className="font-semibold">Order ID:</span> {order._id}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Address:</span> {order.address}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Date Ordered:</span>{" "}
              {order.orderDate}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Price:</span> ₹
              {order.price.toFixed(2)}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Quantity:</span> {order.quantity}
            </p>
            <div className="flex gap-x-4">
              <span className="font-semibold">Status: </span>
              <p className="text-red-400 font-semibold">{order.orderState}</p>
            </div>
            <div
              className={`mt-4 ${
                order.orderState !== "Delivered" ? "block" : "hidden"
              }`}
            >
              <button
                type="button"
                onClick={cancelOrder}
                className="mx-auto bg-white text-red-500 border border-red-500 block py-2 px-3 rounded-sm"
              >
                Cancel order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
