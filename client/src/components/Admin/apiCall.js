import axios from "../../utils/axiosConfig";
import { showAlert } from "../../features/alert/alertSlice";



// create products in admin page
export const createProduct = (formData, navigate, dispatch) => {
    axios
        .post("/products/create-product", formData)
        .then((res) => {
            if (res.data.success) {
                dispatch(showAlert({ message: "Product created successfully", type: "success" }));
                clearForm();
                navigate("/products");
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
        .get("/products/all-products")
        .then((res) => {
            if (res.data.success) {
                const products = res.data.products;
                setProducts(products);
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



// fetch a particular products in admin page
export const a3 = (loginDet, navigate, dispatch) => {
    axios
        .get("/products/fetch-product", fetchProduct)
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
export const updateProduct = (productId, formData, navigate, dispatch) => {
    axios
        .put("/products/edit-product", formData)
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


// Delete products in admin page
export const deleteProduct = (productId, navigate, dispatch) => {
    axios
        .delete("/products/delete-product")
        .then((res) => {
            if (res.data.success) {
                // Handle success, if needed
                dispatch(); // Dispatch any actions on success
                navigate(); // Navigate to a specific page or handle routing
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