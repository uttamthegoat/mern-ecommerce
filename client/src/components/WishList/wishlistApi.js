import axios from "../../utils/axiosConfig";
import { showAlert } from "../../features/alert/alertSlice";

export const getWishlist = async (navigate, dispatch, setWishlistProducts) => {
  try {
    const response = await axios.get("/wishlist/get");
    if (response.data.success) {
      const { items } = response.data.items;
      setWishlistProducts([...items]);
    }
  } catch (error) {
    const message = error.response.data.message;
    const type = "error";
    dispatch(showAlert({ message, type }));
    if (error.response.data.status === "logout") {
      localStorage.removeItem("authenticate");
      navigate("/auth");
    }
  }
};

export const addToWishlist = async (dispatch, navigate, productId) => {
  try {
    const response = await axios.post("/wishlist/add", { productId });
    if (response.data.success) {
      const message = response.data.message;
      const type = "success";
      dispatch(showAlert({ message, type }));
    }
  } catch (error) {
    const message = error.response.data.message;
    const type = "error";
    dispatch(showAlert({ message, type }));
    if (error.response.data.status === "logout") {
      localStorage.removeItem("authenticate");
      navigate("/auth");
    }
  }
};

export const removeFromWishlist = async (
  dispatch,
  setWishlistProducts,
  navigate,
  productId
) => {
  try {
    const response = await axios.delete(`/wishlist/remove/${productId}`);
    if (response.data.success) {
      const message = response.data.message;
      const type = "success";
      dispatch(showAlert({ message, type }));
      setWishlistProducts((prev) =>
        prev.filter((product) => product._id !== productId)
      );
    }
  } catch (error) {
    const message = error.response.data.message;
    const type = "error";
    dispatch(showAlert({ message, type }));
    if (error.response.data.status === "logout") {
      localStorage.removeItem("authenticate");
      navigate("/auth");
    }
  }
};
