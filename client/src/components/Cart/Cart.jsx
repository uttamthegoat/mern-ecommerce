import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  addProductToCart,
  removeProductFromCart,
  getProductsInCart,
} from "./apiCall"; // Import the API calls

const Cart = () => {
  const [userAddress, setUserAddress] = useState({
    street: "123 Main St",
    city: "Cityville",
    state: "State",
    zip: "12345",
  });
  const [productsInCart, setProductsInCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductsInCart();
        setProductsInCart(response.items);
        // Calculate subtotal based on product prices
        const calculatedSubtotal = response.totalPrice;
        setSubtotal(calculatedSubtotal);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (productId) => {
    // Call the addProductToCart function to add the product to the cart
    addProductToCart(productId, setUserAddress, setProductsInCart, setSubtotal);
  };

  const handleRemoveFromCart = (productId) => {
    removeProductFromCart(
      productId,
      setUserAddress,
      setProductsInCart,
      setSubtotal
    );
  };

  return (
    <div className="container mt-3 md:my-8 px-4 mx-auto">
      <div className="border-b-2 border-gray-600 mb-4 p-4 flex items-center justify-center">
        <FontAwesomeIcon icon={faCartPlus} className="text-2xl" />
        <h2 className="ms-2 text-2xl font-semibold text-center">
          Shopping Cart
        </h2>
      </div>
      <div className="md:col-span-1 my-6">
        <h3 className="text-xl font-semibold ps-2 pb-2">Delivery Address</h3>
        <div className="border-2 p-4">
          <p>
            {userAddress.street}, {userAddress.city}, {userAddress.state}-
            {userAddress.zip}
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold mt-4 p-4">
            Subtotal: ${subtotal.toFixed(2)}
          </p>
          <p className="text-xl font-semibold p-4">
            Total Products in the cart: {productsInCart.length}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-4">
        {productsInCart.map((product) => (
          <div
            key={product.product._id}
            className="border p-4 shadow-lg bg-gray-100 md:mx-auto md:w-4/6"
          >
            <div className="w-44 mx-auto">
              <LazyLoadImage
                src={product.product.image}
                alt={product.product.name}
                className="object-cover mb-2"
              />
            </div>
            <hr className="border border-gray-300 w-11/12 mx-auto" />
            <p className="font-semibold text-lg">{product.product.name}</p>
            <p className="text-gray-600">${product.product.price}</p>
            <button
              onClick={() => handleRemoveFromCart(product.product._id)}
              className="bg-red-500 text-white p-2 mt-2"
            >
              Remove from cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
