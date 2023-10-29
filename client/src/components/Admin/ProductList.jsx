import React, { useState } from 'react';

function Admin() {
  // Sample product data
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 20.99 },
    // Add more sample products here
  ]);

  // Form data for creating/editing products
  const [formData, setFormData] = useState({ name: '', price: '' });

  // State to track the currently edited product
  const [editingProductId, setEditingProductId] = useState(null);

  // Function to handle form submission for creating/editing products
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;

    if (editingProductId !== null) {
      // Editing an existing product
      const updatedProducts = products.map((product) => {
        if (product.id === editingProductId) {
          return { ...product, name: formData.name, price: parseFloat(formData.price) };
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
      };
      setProducts([...products, newProduct]);
    }

    // Reset the form
    setFormData({ name: '', price: '' });
    setEditingProductId(null);
  };

  // Function to delete a product
  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <div className="my-4">
        <h2 className="text-lg font-semibold">Add/Edit Product</h2>
        <form onSubmit={handleFormSubmit} className="flex space-x-2">
          <input
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-1/2 p-2 rounded border"
          />
          <input
            type="number"
            placeholder="Product Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="w-1/2 p-2 rounded border"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 px-6 rounded hover:bg-blue-700">
            {editingProductId !== null ? 'Update' : 'Create'}
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Product List</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="p-2 ">{product.name}</td>
                <td className="p-2 ">${product.price.toFixed(2)}</td>
                <td className="p-2">
                  <button
                    onClick={() => setFormData({ name: product.name, price: product.price })}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
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
