import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SearchResultItem = ({ product }) => {
  return (
    <div className="flex flex-col md:gap-y-4 p-6 bg-gray-200 shadow-lg mx-auto md:w-[400px]">
      <div className="md:w-60 w-52 flex-shrink-0 mx-auto">
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
        <p className="text-2xl sm:text-lg text-gray-500 mb-6">
          Items in Stock: {product.productInStock}
        </p>
        <Link
          to={`/product-page/${product._id}`}
          className="text-white bg-purple-500 border border-purple-600 py-2 px-4 rounded-md text-sm hover:bg-purple-600 hover:border-purple-700 mt-6 "
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

export default SearchResultItem;
