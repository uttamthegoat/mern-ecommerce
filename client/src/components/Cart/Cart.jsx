import React, { useState } from 'react';

const Cart = () =>  {
    const [cartItems, setCartItems] = useState([]);
    const [userAddress, setUserAddress] = useState({
      street: '123 Main St',
      city: 'Cityville',
      state: 'State',
      zip: '12345',
    });
  
    // Sample product data with images
    const products = [
      { id: 1, name: 'Product 1', price: 10.99, image: 'https://hammeronline.in/cdn/shop/files/HammerG-ShotsGamingEarbuds.webp?v=1692360860&width=1080' },
      { id: 2, name: 'Product 2', price: 19.99, image: 'https://hammeronline.in/cdn/shop/files/HammerG-ShotsGamingEarbuds.webp?v=1692360860&width=1080' },
      { id: 3, name: 'Product 3', price: 8.49, image: 'https://hammeronline.in/cdn/shop/files/HammerG-ShotsGamingEarbuds.webp?v=1692360860&width=1080' },
    ];
  
    const addToCart = (product) => {
      setCartItems([...cartItems, product]);
    };
  
    const removeFromCart = (product) => {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    };
  
    const totalProducts = products.length;
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  
    return (
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4 p-4">Shopping Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
              <p className="font-semibold text-lg">{product.name}</p>
              <p className="text-gray-600">${product.price}</p>
              <button onClick={() => addToCart(product)} className="bg-blue-500 text-white p-2 mt-2">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="md:col-span-2 mt-6">
          <h3 className="text-xl font-semibold mb-2 p-4">Cart Items</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b-2 py-2">
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(item)} className="text-red-500">Remove</button>
            </div>
          ))}
          <p className="text-xl font-semibold mt-4 p-4">Subtotal: ${subtotal.toFixed(2)}</p>
          <p className="text-xl font-semibold p-4">Total Products Available: {totalProducts}</p>
        </div>
        <div className="md:col-span-1 mt-6">
          <h3 className="text-xl font-semibold mb-2 p-4">Shipping Address</h3>
          <div className="border-2 p-4">
            <p>{userAddress.street}</p>
            <p>{userAddress.city}, {userAddress.state} {userAddress.zip}</p>
            <button className="bg-blue-500 text-white p-2 mt-2">Edit Address</button>
          </div>
        </div>
      </div>
    );
  }
 
export default Cart

