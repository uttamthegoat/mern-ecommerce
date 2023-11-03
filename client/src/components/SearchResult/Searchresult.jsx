import React, { useState } from "react";
import SearchResultItem from "./SearchResultItem";
import FilterForm from "./FilterForm";
import { search } from "./apiCall";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSearch, closeForm } from "../../features/search/searchSlice";

const SearchResults = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchState = useSelector(selectSearch);
  const [searchProducts, setSearchProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  React.useEffect(() => {
    search(setSearchProducts, navigate, dispatch);
    dispatch(closeForm());
  }, [searchState]);

  const closeFilter = () => setShowFilter(false);

  return (
    <div className="w-full mb-8 md:mt-6 px-4">
      <div>
        <div className="mb-6 p-6">
          <h2 className="text-3xl font-semibold text-center">Search Results</h2>
        </div>
        {/* filter form */}
        <div>
          {!showFilter && (
            <button
              type="button"
              className="text-blue-500 border border-blue-500 px-3 py-2 rounded-md"
              onClick={() => setShowFilter(true)}
            >
              Filters
            </button>
          )}
          {showFilter && <FilterForm closeFilter={closeFilter} />}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-6 md:px-0 mx-auto">
          {searchProducts.map((product) => (
            <SearchResultItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
