import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { place_Order } from "../Orders/apiCall";
import { fetchProduct } from "../Admin/apiCall";
import { addProductToCart } from "../Cart/apiCall";

const ProductPage = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [productItem, setProductItem] = useState({
    name: "",
    description: "",
    category: "",
    price: 0,
    productInStock: 0,
    productImage: "",
  });
  const [orderData, setOrderData] = useState({
    orderDate: "",
    product: "",
    quantity: 1,
    price: 0,
  });

  React.useEffect(() => {
    fetchProduct(id, setProductItem, navigate, dispatch);
    setOrderData({ ...orderData, product: id });
  }, []);

  const decreaseAmount = () => {
    if (orderData.quantity > 1) {
      setOrderData({
        ...orderData,
        quantity: orderData.quantity - 1,
        price: (orderData.quantity - 1) * productItem.price,
      });
    }
  };
  const increaseAmount = () => {
    if (orderData.quantity < productItem.productInStock) {
      setOrderData({
        ...orderData,
        quantity: orderData.quantity + 1,
        price: (orderData.quantity + 1) * productItem.price,
      });
    }
  };

  const placeOrder = () => {
    place_Order(orderData, navigate, dispatch);
  };

  const handleAddToCart = () => {
    addProductToCart(id, productItem.price, navigate, dispatch);
  };

  return (
    <div className="lg:flex lg:flex-row lg:justify-around lg:gap-16 lg: px-4 my-10 md:my-16">
      <div className="lg:w-2/4 w-full max-w-screen-lg mx-auto my-5 md:my-0">
        <div className="w-full md:w-9/12 mx-auto">
          <LazyLoadImage
            src={productItem.productImage}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>

      <div className="lg:w-2/4 w-full max-w-screen-lg mx-auto flex flex-col gap-4 items-center md:my-0">
        <h1 className="text-3xl font-bold text-center">{productItem.name}</h1>
        <h6 className="text-2xl font-semibold text-center">
          Price: <span className="text-red-400">₹{productItem.price}</span>
        </h6>
        <div>
          <p className="text-green-600 text-xl">
            {productItem.productInStock} in stock
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-12">
          <button
            className="bg-gray-200 py-2 pb-3 px-5 rounded-lg text-violet-800 text-3xl font-bold"
            onClick={decreaseAmount}
          >
            -
          </button>
          <span className="py-4 px-6 rounded-lg text-3xl">
            {orderData.quantity}
          </span>
          <button
            className="bg-gray-200 py-2 pb-3 px-5 rounded-lg text-violet-800 text-3xl font-bold"
            onClick={increaseAmount}
          >
            +
          </button>
        </div>
        <div className="flex flex-row items-center justify-center gap-12">
          <button
            className="bg-violet-800 text-white font-semibold py-3 w-28 rounded-xl"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            onClick={placeOrder}
            disabled={!productItem.productInStock}
            className="bg-violet-800 text-white font-semibold py-3 w-28 rounded-xl"
          >
            Buy Now
          </button>
        </div>
        <div>
          <p className="font-semibold text-black">
            Category:{" "}
            <span className="font-semibold text-gray-600">
              {productItem.category}
            </span>
          </p>
        </div>
        <p className="text-gray-700 text-center pb-4 lg:pb-4">
          <span className="font-semibold">Description: </span>
          {productItem.description}
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
