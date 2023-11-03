import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
// import { getWishlist, removeFromWishlist } from "./wishlistApi"; // Adjust the import path

const WishList = () => {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    getWishlist().then((wishlistData) => {
      setWishlistProducts(wishlistData);
    });
  }, []);

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId).then((success) => {
      if (success) {
        setWishlistProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      }
    });
  };

  return (
    <div className="container my-6 px-4 mx-auto md:my-10">
      <div className="border-b-2 border-gray-600 mb-4 p-4">
        <h2 className="text-2xl font-semibold text-center">
          <FontAwesomeIcon icon={faBookmark} size="lg" /> Wishlist
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-4">
        {wishlistProducts.map((product) => (
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
            <p className="font-semibold text-lg pl-10">{product.name}</p>
            <div className="flex gap-4 justify-center mt-2">
              <button
                className="bg-purple-500 text-white p-2 rounded-md"
                onClick={() => handleRemoveFromWishlist(product.id)}
              >
                Remove
              </button>
              <button className="bg-purple-500 text-white p-2 rounded-md">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
