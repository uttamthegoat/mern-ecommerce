import axios from "../../utils/axiosConfig";
import { showAlert } from "../../features/alert/alertSlice";



// create products in admin page
export const createProduct = (name, price, quantity, category, description, image, navigate, dispatch) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", image);
    axios
        .post("/products/create-product", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
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
export const a4 = (loginDet, navigate, dispatch) => {
    axios
        .put("/products/edit-product", updateProduct)
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
export const a5 = (loginDet, navigate, dispatch) => {
    axios
        .delete("/products/delete-product", deleteProduct)
        .then((res) => {
            if (res.data.success) {
                l
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