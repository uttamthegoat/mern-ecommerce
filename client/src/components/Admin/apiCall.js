import axios from "../../utils/axiosConfig";
import { showAlert } from "../../features/alert/alertSlice";

// create products in admin page
export const createProduct = (formData, setProducts, navigate, dispatch) => {
  axios
    .post("/products/create-product", formData)
    .then((res) => {
      if (res.data.success) {
        const message = res.data.message,
          type = "success";
        dispatch(showAlert({ message, type }));
        const { product } = res.data;
        setProducts((prevProducts) => [...prevProducts, product]);
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

//get all the product details in the admin page
export const fetchProductData = (setProducts, navigate, dispatch) => {
  axios
    .get("/products/all-products-a")
    .then((res) => {
      if (res.data.success) {
        const { products } = res.data;
        setProducts([...products]);
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

// fetch a particular product in admin page
export const a3 = (id, navigate, dispatch) => {
  axios
    .get(`/products/fetch-product/${id}`)
    .then((res) => {
      if (res.data.success) {
        dispatch();
        navigate();
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

// edit a particular products in admin page
export const updateProduct = (
  id,
  formData,
  setProducts,
  navigate,
  dispatch
) => {
  axios
    .put(`/products/edit-product/${id}`, formData)
    .then((res) => {
      if (res.data.success) {
        const message = res.data.message,
          type = "success";
        dispatch(showAlert({ message, type }));
        const { product } = res.data;
        setProducts((prev) =>
          prev.map((prod) => {
            if (prod._id === id) {
              return product;
            }
            return prod;
          })
        );
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

// Delete products in admin page
export const deleteProduct = (id, navigate, dispatch) => {
  axios
    .delete(`/products/delete-product/${id}`)
    .then((res) => {
      if (res.data.success) {
        const message = res.data.message,
          type = "success";
        dispatch(showAlert({ message, type }));
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
