import React from "react";

const MyOrders = () => {
  return (
    <div className="my-10">
      <div className="border-b-2 border-gray-600 px-2">
        <h1 className="font-bold text-2xl md:text-3xl md:text-center">
          Your Orders
        </h1>
      </div>
      <div>
        <div>
          <h1>Displaying {9} orders</h1>
        </div>
        <div>
          <div className="order-object">
            <div className="flex justify-between">
              <p className="uppercase text-gray-500 font-semibold">
                Order no.:{" "}
                <span className="text-black font-normal">{22874391}</span>
              </p>
              <p className="uppercase text-gray-500 font-semibold">
                Order date:{" "}
                <span className="text-black font-normal">{"22/12/2023"}</span>
              </p>
            </div>
            <hr className=""/>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
