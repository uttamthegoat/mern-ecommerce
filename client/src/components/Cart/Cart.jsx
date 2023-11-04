import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { removeProductFromCart, getProductsInCart } from "./apiCall";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userCart, setUserInCart] = useState({});
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    getProductsInCart(setProductsInCart, setUserInCart, navigate, dispatch);
  }, []);

  const handleRemoveFromCart = (productId, price) => {
    removeProductFromCart(
      productId,
      price,
      setProductsInCart,
      navigate,
      dispatch
    );
  };

  return (
    <div className="container mt-3 md:my-8 px-4 mx-auto">
      <div className="border-b-2 border-gray-600 mb-4 p-4 flex items-center justify-center">
        <FontAwesomeIcon icon={faCartPlus} className="text-2xl" />
        <h2 className="ms-2 text-2xl font-semibold text-center">
          Shopping Cart
        </h2>
      </div>
      <div className="md:col-span-1 my-6">
        <div className="border-2 p-4 flex items-center">
          <h3 className="text-xl font-semibold ps-2">Delivery Address:</h3>
          <p className="ps-2 text-xl">
            {userCart.address || "No address mentioned."}
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold mt-4 p-4">
            Subtotal: ₹{userCart.totalPrice}
          </p>
          <p className="text-xl font-semibold p-4">
            Total Products in the cart: {productsInCart.length}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-4">
        {productsInCart.map((product) => (
          <div
            key={product.product._id}
            className="border p-4 shadow-lg bg-gray-100 md:mx-auto md:w-4/6"
          >
            <div className="w-44 mx-auto">
              <LazyLoadImage
                src={product.product.productImage}
                alt={product.product.name}
                className="object-cover mb-2"
              />
            </div>
            <hr className="border border-gray-300 w-11/12 mx-auto" />
            <div className="ps-6">
              <p className="font-semibold text-lg">{product.product.name}</p>
              <p className="text-gray-600">₹{product.product.price}</p>
              <button
                onClick={() =>
                  handleRemoveFromCart(
                    product.product._id,
                    product.product.price
                  )
                }
                className="bg-red-500 text-white p-2 mt-2 rounded-md"
              >
                Remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
