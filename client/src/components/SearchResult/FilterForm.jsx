import React from "react";

const FilterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-2 my-4">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div>
          <div>
            
          </div>
        </div>
        <div className="flex justify-end gap-x-8">
          <button type="submit" className="px-3 py-2 bg-blue-700 text-white">Apply filters</button>
          <button type="button" className="px-3 py-2 bg-gray-500 text-white">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
