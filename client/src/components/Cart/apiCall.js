import axios from "../../utils/axiosConfig";
import { showAlert } from "../../features/alert/alertSlice";

//get all products in the cart-get
export const getProductsInCart = (userId, navigate, dispatch) => {
    axios
      .get(`/get-cart/${userId}`) // Include the user's ID in the URL
      .then((res) => {
        if (res.data.success) {
          const productsInCart = res.data.results.items;
        }
      })
      .catch((error) => {
        const message = error.response.data.message;
        const type = "error";
        dispatch(showAlert({ message, type }));
        if (error.response.data.status === "logout") {
          localStorage.removeItem("authenticate");
          navigate("/auth");
        }
      });
  };
  



// Add a product to the cart (POST request)
export const addProductToCart = ( navigate, dispatch) => {
    axios
      .post(`/add-cart/${productId}`)
      .then((res) => {
        if (res.data.success) {
          console.log('Product added to the cart successfully.');
        }
      })
      .catch((error) => {
        const message = error.response.data.message;
        const type = 'error';
        dispatch(showAlert({ message, type }));
  
        if (error.response.data.status === 'logout') {
          localStorage.removeItem('authenticate');
          navigate('/auth');
        }
      });
  };
  


// Remove a product from the cart (DELETE request)
export const removeProductFromCart = (productId, navigate, dispatch) => {
    axios
      .delete(`/remove-cart/${productId}`) // Adjust the API endpoint as needed
      .then((res) => {
        if (res.data.success) {
          // Handle success, if necessary
          console.log('Product removed from the cart successfully.');
        }
      })
      .catch((error) => {
        const message = error.response.data.message;
        const type = 'error';
        dispatch(showAlert({ message, type }));
  
        if (error.response.data.status === 'logout') {
          localStorage.removeItem('authenticate');
          navigate('/auth');
        }
      });
  };
  