import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { get_All_Orders } from "./apiCall";

const MyOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [orders, setOrders] = React.useState([
    {
      _id: 1,
      orderDate: "22/11/2023",
      product: {
        _id: 122,
        productImage:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRmKtgm0a1ntX3diNOSIGZyf5tHZMTGfUV5Euq4_mT-as4VyyB6E2YZCN6b_sXjGjYfj2DXgKWPjf9EWIwvHvp2RG-Q1U8wRdZthhtpI7hwIQsupAyHdKHZ&usqp=CAE",
      },
    },
    {
      _id: 2,
      orderDate: "23/01/2023",
      product: {
        _id: 113,
        productImage:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRmKtgm0a1ntX3diNOSIGZyf5tHZMTGfUV5Euq4_mT-as4VyyB6E2YZCN6b_sXjGjYfj2DXgKWPjf9EWIwvHvp2RG-Q1U8wRdZthhtpI7hwIQsupAyHdKHZ&usqp=CAE",
      },
    },
  ]);
  const [totalOrders, setTotalOrders] = React.useState(9);

  React.useEffect(() => {
    // get_All_Orders(setOrders, setTotalOrders, navigate, dispatch);
  }, []);

  return (
    <div className="my-4 md:my-10">
      <div className="border-b-2 border-gray-600 px-2 h-[40px] flex justify-center">
        <LazyLoadImage
          src="https://t4.ftcdn.net/jpg/04/10/58/73/360_F_410587340_fG36wHlwxpLja2HBOnEeQPHsM9cENFVs.jpg"
          alt="orderLogo"
          className="w-auto h-full"
        />
        <h1 className="font-bold text-2xl md:text-3xl">Your Orders</h1>
      </div>
      <div>
        <div className="w-9/12 mx-auto py-4 px-3">
          <h1 className="font-semibold">Displaying {totalOrders} orders</h1>
        </div>
        <div className="all-order-objects space-y-6 px-2">
          {orders.map((order) => {
            return (
              <div
                key={order._id}
                className="order-object w-full md:w-9/12 mx-auto bg-gray-100 shadow-lg"
              >
                <div className="flex justify-around py-3">
                  <p className="uppercase text-gray-500 font-semibold text-center">
                    Order Id.:{" "}
                    <span className="text-black font-normal">{order._id}</span>
                  </p>
                  <p className="uppercase text-gray-500 font-semibold text-center">
                    Order date:{" "}
                    <span className="text-black font-normal">
                      {order.orderDate}
                    </span>
                  </p>
                </div>
                <hr className="border border-gray-300 w-11/12 mx-auto" />
                <div className="md:grid md:grid-cols-2 p-3">
                  <div className="w-[200px] mx-auto py-2 md:py-0">
                    <LazyLoadImage
                      src={order.product.productImage}
                      alt="productImage"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex flex-col justify-around space-y-3 md:space-y-0">
                    <Link
                      to={`/product-page/${order.product._id}`}
                      className="text-black font-bold text-xl border-2 border-gray-400 mx-auto w-[200px]  text-center"
                    >
                      View Product
                    </Link>
                    <Link
                      to={`/orderinfo/${order._id}`}
                      className="text-black font-bold text-xl border-2 border-gray-400 mx-auto w-[200px] text-center"
                    >
                      View Order
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
