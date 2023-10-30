import React from "react";

const OrderInfo = () => {
  const order = {
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.D7K_78l4ZiqpP8nmLmebBwHaHa%26pid%3DApi&f=1&ipt=2b98db4dd936c3379e09487eff0dfae21f451dca93c0b7995f96d9c51285b41f&ipo=images", // Example image URLD
    orderId: "123456",
    productName: "Product Name", // Example product name
    address: "123 Main St, Cityville, State - 12345",
    date: "October 25, 2023",
    price: 99.99,
    quantity: 2,
    orderState: "Pending",
  };

  const cancelOrder = () => {};

  return (
    <div className="container mt-3 md:my-8 px-4 mx-auto">
      <div className="border-b-2 border-gray-600 mb-4 p-4">
        <h2 className="text-2xl font-semibold text-center">Order Details</h2>
      </div>
      <div className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 shadow-lg bg-gray-100 md:mx-auto">
            <img
              src={order.image}
              alt="Order Image"
              className="w-full h-auto md:w-80 lg:w-96" // Adjust image width for PC view
            />
          </div>
          <div className="border p-4 shadow-lg bg-gray-100 text-base md:text-lg lg:text-xl">
            <h3 className="text-xl md:text-2xl mb-4 text-center">
              {order.productName}
            </h3>
            <p className="mb-2">
              <span className="font-semibold">Order ID:</span> {order.orderId}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Address:</span> {order.address}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Date Ordered:</span> {order.date}
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
