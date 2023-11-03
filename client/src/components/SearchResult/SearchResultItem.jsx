import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {} from '../WishList/wishlistApi';

const SearchResultItem = ({ product }) => {
  const handleAddWishlist = (productId) => {
    console.log(productId);
  };
  return (
    <div className="flex flex-col md:gap-y-4 p-6 bg-gray-200 shadow-lg mx-auto w-11/12 md:w-9/12">
      <div className="md:w-60 w-10/12 flex-shrink-0 mx-auto">
        <LazyLoadImage
          src={product.productImage}
          alt={product.name}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <div className="flex-grow mt-6 sm:mt-0 sm:ml-4 sm:text-left">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          {product.name}
        </h2>
        <p className="text-2xl sm:text-xl text-gray-700">
          ₹ {product.price.toFixed(2)}
        </p>
        <p className="text-2xl sm:text-lg text-gray-500 mb-3">
          Items in Stock: {product.productInStock}
        </p>
        <div className="flex md:flex-row flex-col justify-around mt-3">
          <Link
            to={`/product-page/${product._id}`}
            className="text-white bg-purple-500 border border-purple-600 py-2 px-2 md:px-4 rounded-md text-sm hover:bg-purple-600 hover:border-purple-700 text-center"
          >
            View Product
          </Link>
          <button
            className="text-white bg-purple-500 border border-purple-600 py-2 px-2 md:px-4 rounded-md text-sm hover:bg-purple-600 hover:border-purple-700 mt-4 md:mt-0"
            onClick={() => handleAddWishlist(product._id)}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
