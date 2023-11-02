import React from "react";
import { Link } from "react-router-dom";

const SearchResultItem = ({ product }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center mb-6 p-6 bg-gray-100 shadow-lg">
      <div className="w-64 sm:w-48 h-64 sm:h-48 flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-grow mt-6 sm:mt-0 sm:ml-4 text-center sm:text-left">
        <h2 className="text-3xl sm:text-2xl font-semibold mb-4">{product.name}</h2>
        <p className="text-2xl sm:text-xl text-gray-700">${product.price.toFixed(2)}</p>
        <p className="text-2xl sm:text-xl text-gray-500 mb-6">Items in Stock: {product.stock}</p>
        <Link
          to="/product-page/112"
          className="text-white bg-purple-500 border border-purple-600 py-2 px-4 rounded-md text-sm hover:bg-purple-600 hover:border-purple-700 mt-6 "
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

const SearchResults = () => {
  const searchResults = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      stock: 5,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3oqM0x_UEG9DHi2YInAWcQHaEK%26pid%3DApi&f=1&ipt=3a3a3dc33b9132a61c891a0407c55bc05275ee0e1e5cf0d911aa2881625f382b&ipo=images",
    },
    {
      id: 2,
      name: "Product 2",
      price: 14.99,
      stock: 2,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3oqM0x_UEG9DHi2YInAWcQHaEK%26pid%3DApi&f=1&ipt=3a3a3dc33b9132a61c891a0407c55bc05275ee0e1e5cf0d911aa2881625f382b&ipo=images",
    },
    {
      id: 3,
      name: "Product 3",
      price: 24.99,
      stock: 10,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3oqM0x_UEG9DHi2YInAWcQHaEK%26pid%3DApi&f=1&ipt=3a3a3dc33b9132a61c891a0407c55bc05275ee0e1e5cf0d911aa2881625f382b&ipo=images",
    },
    // Add more product objects
  ];

  return (
    <div className="container mt-6 md:my-8 px-4 mx-auto flex justify-center">
      <div>
        <div className="mb-6 p-6">
          <h2 className="text-3xl font-semibold text-center">Search Results</h2>
        </div>
        <div className="space-y-6">
          {searchResults.map((product) => (
            <SearchResultItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
