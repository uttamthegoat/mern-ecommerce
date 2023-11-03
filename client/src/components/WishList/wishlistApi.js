import axios from "axios";
import { showAlert } from "../../features/alert/alertSlice";


export const getWishlist = async (navigate,dispatch) => {
  try {
    const response = await axios.get("wishlist/get");
    if (response.data.success) {
      console.log.response.data;
    }
    return [];
  } catch (error) {
    
    const message = error.response.data.message;
    const type = "error";
    dispatch(showAlert({ message, type }));
    if (error.response.data.status === "logout") {
      localStorage.removeItem("authenticate");
      navigate("/auth");
    }
    ;
  }
};

export const removeFromWishlist = async (navigate,dispatch, productId) => {
  try {
    const response = await axios.delete(`/wishlist/remove`,  { productId } );
    if (response.status === 200) {
      return true;
    }
    ;
  } catch (error) {
    
    const message = error.response.data.message;
    const type = "error";
    dispatch(showAlert({ message, type }));
    if (error.response.data.status === "logout") {
      localStorage.removeItem("authenticate");
      navigate("/auth");
    }
    ;
  }
};
