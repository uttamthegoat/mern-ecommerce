import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Cart = () => {
  const [userAddress, setUserAddress] = useState({
    street: "123 Main St",
    city: "Cityville",
    state: "State",
    zip: "12345",
  });

  // Sample product data with images
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      image:
        "https://hammeronline.in/cdn/shop/files/HammerG-ShotsGamingEarbuds.webp?v=1692360860&width=1080",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      image:
        "https://hammeronline.in/cdn/shop/files/HammerG-ShotsGamingEarbuds.webp?v=1692360860&width=1080",
    },
    {
      id: 3,
      name: "Product 3",
      price: 8.49,
      image:
        "https://hammeronline.in/cdn/shop/files/HammerG-ShotsGamingEarbuds.webp?v=1692360860&width=1080",
    },
  ];

  const totalProducts = products.length;
  const subtotal = 0;

  return (
    <div className="container mt-3 md:my-8 px-4 mx-auto">
      <div className="border-b-2 border-gray-600 mb-4 p-4 flex items-center justify-center">
        <FontAwesomeIcon icon={faCartPlus} className="text-2xl"/>
        <h2 className="ms-2 text-2xl font-semibold text-center">Shopping Cart</h2>
      </div>
      {/* address */}
      <div className="md:col-span-1 my-6">
        <h3 className="text-xl font-semibold ps-2 pb-2">Delivery Address</h3>
        <div className="border-2 p-4">
          <p>
            {userAddress.street},{userAddress.city}, {userAddress.state}
            {"-"}
            {userAddress.zip}
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold mt-4 p-4">
            Subtotal: ${subtotal.toFixed(2)}
          </p>
          <p className="text-xl font-semibold p-4">
            Total Products in the cart: {totalProducts}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 shadow-lg bg-gray-100 md:mx-auto md:w-4/6"
          >
            <div className="w-44 mx-auto">
              <LazyLoadImage
                src={product.image}
                alt={product.name}
                className="object-cover mb-2"
              />
            </div>
            <hr className="border border-gray-300 w-11/12 mx-auto" />
            <p className="font-semibold text-lg">{product.name}</p>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white p-2 mt-2"
            >
              View product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
