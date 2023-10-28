import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const MyOrders = () => {
  return (
    <div className="my-4 md:my-10">
      <div className="border-b-2 border-gray-600 px-2 h-[40px] flex justify-center">
        <img
          src="https://t4.ftcdn.net/jpg/04/10/58/73/360_F_410587340_fG36wHlwxpLja2HBOnEeQPHsM9cENFVs.jpg"
          alt="orderLogo"
          className="w-auto h-full"
        />
        <h1 className="font-bold text-2xl md:text-3xl">Your Orders</h1>
      </div>
      <div>
        <div className="w-9/12 mx-auto py-4 px-3">
          <h1 className="font-semibold">Displaying {9} orders</h1>
        </div>
        <div className="all-order-objects space-y-6 px-2">
          <div className="order-object w-full md:w-9/12 mx-auto bg-gray-100 shadow-lg">
            <div className="flex justify-around py-3">
              <p className="uppercase text-gray-500 font-semibold text-center">
                Order no.:{" "}
                <span className="text-black font-normal">{22874391}</span>
              </p>
              <p className="uppercase text-gray-500 font-semibold text-center">
                Order date:{" "}
                <span className="text-black font-normal">{"22/12/2023"}</span>
              </p>
            </div>
            <hr className="border border-gray-300 w-11/12 mx-auto" />
            <div className="md:grid md:grid-cols-2 p-3">
              <div className="w-[200px] mx-auto py-2 md:py-0">
                <LazyLoadImage
                  src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQJzMB-TEZ4O427tD9g6tMEZTtvHQoc_77dEkEfBaaar7wldG1uyBIu1IykjVMdC637SsO4cozC5SMqtlMXHg5tUieELTa0h6-kGM1khiUzI7Lvq899lEWBFg&usqp=CAE"
                  alt="productImage"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col justify-around space-y-3 md:space-y-0">
                <Link
                  to="/product-page/112"
                  className="text-black font-bold text-xl border-2 border-gray-400 mx-auto w-[200px]  text-center"
                >
                  View Product
                </Link>
                <Link
                  to="/orderinfo/113"
                  className="text-black font-bold text-xl border-2 border-gray-400 mx-auto w-[200px] text-center"
                >
                  View Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
