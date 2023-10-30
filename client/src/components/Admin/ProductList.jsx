import React, { useState } from "react";

function Admin() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10.99, quantity: 100, category: "electronics", description: "Description for Product 1", imageUrl: "" },
    { id: 2, name: "Product 2", price: 20.99, quantity: 50, category: "clothing", description: "Description for Product 2", imageUrl: "" },
    // Add more sample products here
  ]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
    description: "",
    imageFile: null,
  });

  const [editingProductId, setEditingProductId] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price) return;

    if (editingProductId !== null) {
      // Editing an existing product
      const updatedProducts = products.map((product) => {
        if (product.id === editingProductId) {
          return {
            ...product,
            name: formData.name,
            price: parseFloat(formData.price),
            quantity: parseInt(formData.quantity),
            category: formData.category,
            description: formData.description,
            imageUrl: URL.createObjectURL(formData.imageFile), // Display uploaded image
          };
        }
        return product;
      });
      setProducts(updatedProducts);
    } else {
      // Creating a new product
      const newProduct = {
        id: Date.now(), // You can use a better way to generate IDs
        name: formData.name,
        price: parseFloat(formData.price),
        quantity: parseInt(formData.quantity),
        category: formData.category,
        description: formData.description,
        imageUrl: URL.createObjectURL(formData.imageFile), // Display uploaded image
      };
      setProducts([...products, newProduct]);
    }

    setFormData({
      name: "",
      price: "",
      quantity: "",
      category: "",
      description: "",
      imageFile: null,
    });
    setEditingProductId(null);
    setIsEditing(false);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const startEditing = (product) => {
    setFormData({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      category: product.category,
      description: product.description,
      imageFile: null,
    });
    setEditingProductId(product.id);
    setIsEditing(true);
  };

  return (
    <div>
      <div className="my-4">
        <h2 className="text-lg font-semibold">
          {isEditing ? "Edit Product" : "Add Product"}
        </h2>
        <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="p-2 rounded border"
          />
          <input
            type="number"
            placeholder="Product Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className="p-2 rounded border"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={(e) =>
              setFormData({ ...formData, quantity: e.target.value })
            }
            className="p-2 rounded border"
          />
          <input
            type="text"
            placeholder="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="p-2 rounded border"
          />
          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="p-2 rounded border"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setFormData({ ...formData, imageFile: e.target.files[0] })
            }
            className="p-2"
          />
          {formData.imageFile && (
            <div className="w-1/2 p-2">
              <span>{formData.imageFile.name}</span>
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, imageFile: null })
                }
                className="bg-red-500 text-white p-1 px-2 rounded ml-2 hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          )}
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={isEditing ? cancelEditing : null}
              className="bg-blue-500 text-white p-2 px-6 rounded hover:bg-blue-700"
            >
              {isEditing ? "Cancel" : "Create"}
            </button>
            {isEditing ? (
              <button
                type="submit"
                className="bg-green-500 text-white p-2 px-6 rounded hover:bg-green-700"
              >
                Save
              </button>
            ) : null}
          </div>
        </form>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Product List</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">category</th>
              <th className="p-2">Description</th>
              <th className="p-2">Image</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="p-2 ">{product.name}</td>
                <td className="p-2 ">${product.price.toFixed(2)}</td>
                <td className="p-2 ">{product.quantity}</td>
                <td className="p-2 ">{product.category}</td>
                <td className="p-2 ">{product.description}</td>
                <td className="p-2">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-12 w-12 object-contain"
                  />
                </td>
                <td className="p-2">
                  <button
                    type="button"
                    onClick={() => startEditing(product)}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteProduct(product.id)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-700 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
