import React, { useState } from "react";
import { categories } from "../../assets/constants";
import { filterProducts } from "../SearchResult/apiCall";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const FilterForm = ({ closeFilter, setSearchProducts }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filterCondition, setFilterCondition] = useState({
    category: "",
    minPrice: 0,
    maxPrice: 0,
    sort: 0,
  });

  const handleCategoryChange = (e) => {
    setFilterCondition({ ...filterCondition, category: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterProducts(filterCondition, setSearchProducts, navigate, dispatch);
    closeFilter();
  };

  return (
    <div className="px-2 my-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-4">
          {/* sorting */}
          <div>
            <p className="text-lg font-semibold">Sort By:</p>
            <ul className="space-y-2">
              <li
                className="bg-gray-200 px-2 py-1 rounded-md cursor-pointer"
                onClick={() =>
                  setFilterCondition({ ...filterCondition, sort: 0 })
                }
              >
                Price: Low to High
              </li>
              <li
                className="bg-gray-200 px-2 py-1 rounded-md cursor-pointer"
                onClick={() =>
                  setFilterCondition({ ...filterCondition, sort: 1 })
                }
              >
                Price: High to Low
              </li>
            </ul>
          </div>
          {/* categories */}
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Category:</p>
            {categories.map((cat, index) => {
              return (
                <label key={index} className="cursor-pointer">
                  <input
                    type="radio"
                    value={cat}
                    checked={filterCondition.category === cat}
                    onChange={handleCategoryChange}
                    className="cursor-pointer"
                  />
                  {cat}
                </label>
              );
            })}
          </div>
          {/* price */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <label htmlFor="minPrice">
                Min Price: ₹ {filterCondition.minPrice}
              </label>
              <input
                type="number"
                name="minPrice"
                id="minPrice"
                value={filterCondition.minPrice}
                placeholder="Enter minimum price..."
                onChange={(e) =>
                  setFilterCondition({
                    ...filterCondition,
                    minPrice: Number(e.target.value),
                  })
                }
                className="border border-gray-500 rounded-md px-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="maxPrice">
                Max Price: ₹ {filterCondition.maxPrice}
              </label>
              <input
                type="number"
                name="maxPrice"
                id="maxPrice"
                value={filterCondition.maxPrice}
                placeholder="Enter maximum price..."
                onChange={(e) =>
                  setFilterCondition({
                    ...filterCondition,
                    maxPrice: Number(e.target.value),
                  })
                }
                className="border border-gray-500 rounded-md px-2"
              />
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className="flex justify-end gap-x-8">
          <button
            type="submit"
            className="px-3 py-2 bg-blue-700 text-white rounded-md"
          >
            Apply filters
          </button>
          <button
            type="button"
            className="px-3 py-2 bg-gray-500 text-white rounded-md"
            onClick={closeFilter}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
