import axios from "../../utils/axiosConfig";
import { showAlert } from "../../features/alert/alertSlice";

//get all products in the cart-get
export const getProductsInCart = (
  setProductsInCart,
  setUserInCart,
  navigate,
  dispatch
) => {
  axios
    .get(`/cart/get-cart`) // Include the user's ID in the URL
    .then((res) => {
      if (res.data.success) {
        const { results } = res.data;
        setProductsInCart([...results.items]);
        setUserInCart({ ...results });
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
export const addProductToCart = (productId, price, navigate, dispatch) => {
  axios
    .post(`/cart/add-cart/${productId}`, { price })
    .then((res) => {
      if (res.data.success) {
        const message = res.data.message;
        const type = "success";
        dispatch(showAlert({ message, type }));
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

// Remove a product from the cart (DELETE request)
export const removeProductFromCart = (
  productId,
  price,
  setProductsInCart,
  navigate,
  dispatch
) => {
  axios
    .delete(`/cart/delete-cart/${productId}/${price}`)
    .then((res) => {
      if (res.data.success) {
        const message = res.data.message;
        const type = "success";
        dispatch(showAlert({ message, type }));
        setProductsInCart((prevCart) => {
          return prevCart.filter((item) => item.product._id !== productId);
        });
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
