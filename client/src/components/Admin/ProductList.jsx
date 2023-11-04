import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchProductData,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./apiCall";

function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  const [changeProduct, setChangeProduct] = useState({
    _id: null,
    name: "",
    price: 0,
    qty: 0,
    category: "",
    description: "",
  });

  const clearForm = () => {
    setName("");
    setDescription("");
    setCategory("");
    setPrice(0);
    setQuantity(0);
    setSelectedImage(null);
  };

  const handleEditProductChange = (e) => {
    setChangeProduct({ ...changeProduct, [e.target.name]: e.target.value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleCreateProduct = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("productInStock", quantity);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("file", selectedImage);
    createProduct(formData, setProducts, navigate, dispatch);
    clearForm();
  };

  const assignEditProduct = (product) => {
    setIsEditing(true);
    setChangeProduct({
      ...changeProduct,
      _id: product._id,
      name: product.name,
      price: product.price,
      qty: product.productInStock,
      category: product.category,
      description: product.description,
    });
  };

  const handleUpdateProduct = () => {
    const formData = new FormData();
    formData.append("name", changeProduct.name);
    formData.append("price", changeProduct.price);
    formData.append("productInStock", changeProduct.qty);
    formData.append("category", changeProduct.category);
    formData.append("description", changeProduct.description);
    formData.append("file", selectedImage);

    updateProduct(changeProduct._id, formData, setProducts, navigate, dispatch);
    setIsEditing(false);
  };

  const handleDeleteProduct = (id) => {
    deleteProduct(id, navigate, dispatch);
    setProducts((prev) => prev.filter((product) => product._id !== id));
  };

  useEffect(() => {
    fetchProductData(setProducts, navigate, dispatch);
  }, []);

  return (
    <div className="p-4">
      <div className="my-4 flex justify-around">
        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">
            Add Product
          </h2>
          <form className="w-full max-w-md" onSubmit={handleCreateProduct}>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3 mb-2 md:w-1/2">
                <label className="block mb-1 text-gray-700 text-sm">
                  Product Name
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="w-full p-2 rounded border"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="w-full px-3 mb-2 md:w-1/2">
                <label className="block mb-1 text-gray-700 text-sm">
                  Product Price
                </label>
                <input
                  type="number"
                  placeholder="Product Price"
                  className="w-full p-2 rounded border"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="w-full px-3 mb-2 md:w-1/2">
                <label className="block mb-1 text-gray-700 text-sm">
                  Quantity
                </label>
                <input
                  type="number"
                  placeholder="Quantity"
                  className="w-full p-2 rounded border"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
              <div className="w-full px-3 mb-2 md:w-1/2">
                <label className="block mb-1 text-gray-700 text-sm">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="Category"
                  className="w-full p-2 rounded border"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </div>
              <div className="w-full px-3 mb-2">
                <label className="block mb-1 text-gray-700 text-sm">
                  Description
                </label>
                <textarea
                  placeholder="Description"
                  className="w-full p-2 rounded border"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="w-full px-3 mb-2">
                <label className="block mb-1 text-gray-700 text-sm">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full p-2"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-indigo-700 text-white p-2 px-6 rounded hover:bg-indigo-800 text-sm"
              >
                Create
              </button>
            </div>
          </form>
        </div>
        {isEditing && (
          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">
              Change product details
            </h2>
            <form onSubmit={handleUpdateProduct} className="w-full max-w-md">
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3 mb-2 md:w-1/2">
                  <label className="block mb-1 text-gray-700 text-sm">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    className="w-full p-2 rounded border"
                    value={changeProduct.name}
                    onChange={handleEditProductChange}
                    required
                  />
                </div>
                <div className="w-full px-3 mb-2 md:w-1/2">
                  <label className="block mb-1 text-gray-700 text-sm">
                    Product Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Product Price"
                    className="w-full p-2 rounded border"
                    value={changeProduct.price}
                    onChange={handleEditProductChange}
                    required
                  />
                </div>
                <div className="w-full px-3 mb-2 md:w-1/2">
                  <label className="block mb-1 text-gray-700 text-sm">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="qty"
                    placeholder="Quantity"
                    className="w-full p-2 rounded border"
                    value={changeProduct.qty}
                    onChange={handleEditProductChange}
                    required
                  />
                </div>
                <div className="w-full px-3 mb-2 md:w-1/2">
                  <label className="block mb-1 text-gray-700 text-sm">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    className="w-full p-2 rounded border"
                    value={changeProduct.category}
                    onChange={handleEditProductChange}
                    required
                  />
                </div>
                <div className="w-full px-3 mb-2">
                  <label className="block mb-1 text-gray-700 text-sm">
                    Description
                  </label>
                  <textarea
                    placeholder="Description"
                    name="description"
                    className="w-full p-2 rounded border"
                    value={changeProduct.description}
                    onChange={handleEditProductChange}
                    required
                  ></textarea>
                </div>
                <div className="w-full px-3 mb-2">
                  <label className="block mb-1 text-gray-700 text-sm">
                    Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full p-2"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className="flex justify-around">
                <button
                  type="button"
                  className="bg-gray-400 text-white p-2 px-6 rounded hover:bg-gray-500 text-sm"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-700 text-white p-2 px-6 rounded hover:bg-indigo-800 text-sm"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <div>
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">
          Product List
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-200">
              <th className="p-3 text-gray-700 text-sm text-left max-w-275">
                Name
              </th>
              <th className="p-3 text-gray-700 text-sm text-left">Price</th>
              <th className="p-3 text-gray-700 text-sm text-left">Quantity</th>
              <th className="p-3 text-gray-700 text-sm text-left">Category</th>
              <th className="p-3 text-gray-700 text-sm text-left">
                Description
              </th>
              <th className="p-3 text-gray-700 text-sm text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product._id} className="">
                  <td
                    className="p-3 hover:text-indigo-700 truncate cursor-pointer"
                    title="product1"
                  >
                    {product.name}
                  </td>
                  <td className="p-3">₹{product.price}</td>
                  <td className="p-3">{product.productInStock}</td>
                  <td className="p-3">{product.category}</td>
                  <td className="p-3 w-[750px]">{product.description}</td>
                  <td className="p-3 flex gap-4">
                    <button
                      type="button"
                      className="bg-indigo-700 text-white p-2 rounded hover:bg-indigo-800 text-sm"
                      onClick={() => assignEditProduct(product)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="bg-red-700 text-white p-2 rounded hover:bg-red-800 ml-2 text-sm"
                      onClick={() => handleDeleteProduct(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
