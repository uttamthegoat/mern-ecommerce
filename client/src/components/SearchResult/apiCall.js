import axios from "../../utils/axiosConfig";
import { showAlert } from "../../features/alert/alertSlice";

export const search = (setSearchProducts, navigate, dispatch) => {
  const searchQuery = sessionStorage.getItem("searchQuery");
  axios
    .get(`/search/products?query=${searchQuery}`)
    .then((res) => {
      if (res.data.success) {
        const { products } = res.data;
        setSearchProducts([...products]);
      }
    })
    .catch((error) => {
      const message = error.response.data.message,
        type = "error";
      dispatch(showAlert({ message, type }));
      if (error.response.data.status === "logout") {
        localStorage.removeItem("authenticate");
        navigate("/auth");
      }
    });
};

export const filterProducts = (navigate, dispatch) => {
  const searchQuery = sessionStorage.getItem("searchQuery");
  axios
    .get(`/search/products?query=${searchQuery}`)
    .then((res) => {
      if (res.data.success) {
      }
    })
    .catch((error) => {
      const message = error.response.data.message,
        type = "error";
      dispatch(showAlert({ message, type }));
      if (error.response.data.status === "logout") {
        localStorage.removeItem("authenticate");
        navigate("/auth");
      }
    });
};
