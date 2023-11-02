import axios from "axios";
import { showAlert } from "../../features/alert/alertSlice";

const apiUrl = "http://localhost:5173/api/wishlist"; 

export const getWishlist = async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);
    if (response.status === 200) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    const message = error.response.data.message;
    const type = "error";
    dispatch(showAlert({ message, type }));
    return [];
  }
};

export const removeFromWishlist = async (dispatch, productId) => {
  try {
    const response = await axios.delete(`${apiUrl}/remove`, { data: { productId } });
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error removing item from wishlist:", error);
    const message = error.response.data.message;
    const type = "error";
    dispatch(showAlert({ message, type }));
    return false;
  }
};
