import React from "react";

function Admin() {
  // JavaScript function to handle name truncation
  const handleNameHover = (event) => {
    const element = event.target;
    if (element.scrollWidth > element.offsetWidth) {
      element.setAttribute("title", element.textContent);
    } else {
      element.removeAttribute("title");
    }
  };

  return (
    <div className="p-4">
      <div className="my-4">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Add Product</h2>
        <form className="w-full max-w-md">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3 mb-2 md:w-1/2">
              <label className="block mb-1 text-gray-700 text-sm">Product Name</label>
              <input
                type="text"
                placeholder="Product Name"
                className="w-full p-2 rounded border"
              />
            </div>
            <div className="w-full px-3 mb-2 md:w-1/2">
              <label className="block mb-1 text-gray-700 text-sm">Product Price</label>
              <input
                type="number"
                placeholder="Product Price"
                className="w-full p-2 rounded border"
              />
            </div>
            <div className="w-full px-3 mb-2 md:w-1/2">
              <label className="block mb-1 text-gray-700 text-sm">Quantity</label>
              <input
                type="number"
                placeholder="Quantity"
                className="w-full p-2 rounded border"
              />
            </div>
            <div className="w-full px-3 mb-2 md:w-1/2">
              <label className="block mb-1 text-gray-700 text-sm">Category</label>
              <input
                type="text"
                placeholder="Category"
                className="w-full p-2 rounded border"
              />
            </div>
            <div className="w-full px-3 mb-2">
              <label className="block mb-1 text-gray-700 text-sm">Description</label>
              <textarea
                placeholder="Description"
                className="w-full p-2 rounded border"
              ></textarea>
            </div>
            <div className="w-full px-3 mb-2">
              <label className="block mb-1 text-gray-700 text-sm">Image</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-indigo-700 text-white p-2 px-6 rounded hover:bg-indigo-800 text-sm"
            >
              Create
            </button>
          </div>
        </form>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">Product List</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-200">
              <th className="p-3 text-gray-700 text-sm">Name</th>
              <th className="p-3 text-gray-700 text-sm">Price</th>
              <th className="p-3 text-gray-700 text-sm">Quantity</th>
              <th className="p-3 text-gray-700 text-sm">Category</th>
              <th className="p-3 text-gray-700 text-sm">Description</th>
              <th className="p-3 text-gray-700 text-sm">Image</th>
              <th className="p-3 text-gray-700 text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="p-3 hover:text-indigo-700 truncate w-32 cursor-pointer"
                onMouseEnter={handleNameHover}
              >
                Product 1 Product 1 Product 11 lorem
              </td>
              <td className="p-3">$10.99</td>
              <td className="p-3">100</td>
              <td className="p-3">Electronics</td>
              <td className="p-3">Description for Product 1</td>
              <td className="p-3">
                <img
                  src=""
                  alt="Product 1"
                  className="h-12 w-12 object-cover"
                />
              </td>
              <td className="p-3">
                <button
                  type="button"
                  className="bg-indigo-700 text-white p-2 rounded hover:bg-indigo-800 text-sm"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="bg-red-700 text-white p-2 rounded hover:bg-red-800 ml-2 text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td
                className="p-3 hover:text-indigo-700 truncate w-32 cursor-pointer"
                onMouseEnter={handleNameHover}
              >
                Product 2 Product 2 Product 2 Product 2
              </td>
              <td className="p-3">$20.99</td>
              <td className="p-3">50</td>
              <td className="p-3">Clothing</td>
              <td className="p-3">Description for Product 2</td>
              <td className="p-3">
                <img
                  src=""
                  alt="Product 2"
                  className="h-12 w-12 object-cover"
                />
              </td>
              <td className="p-3">
                <button
                  type="button"
                  className="bg-indigo-700 text-white p-2 rounded hover-bg-indigo-800 text-sm"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="bg-red-700 text-white p-2 rounded hover-bg-red-800 ml-2 text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
