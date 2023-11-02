import axios from "../../utils/axiosConfig";
import { showAlert } from "../../features/alert/alertSlice";

export const get_All_Orders = (
  setOrders,
  setTotalOrders,
  navigate,
  dispatch
) => {
  axios
    .get("/orders/get-all-orders")
    .then((res) => {
      if (res.data.success) {
        const { orders } = res.data;
        setTotalOrders(orders.length);
        setOrders([...orders]);
      }
      f;
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

export const get_Order = (id, setOrder, navigate, dispatch) => {
  axios
    .get(`/orders/get-order/${id}`)
    .then((res) => {
      if (res.data.success) {
        const { order } = res.data;
        setOrder({ ...order });
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

export const cancel_Order = (id, navigate, dispatch) => {
  axios
    .delete(`/orders/cancel-order/${id}`)
    .then((res) => {
      if (res.data.success) {
        const message = res.data.message,
          type = "success";
        dispatch(showAlert({ message, type }));
        navigate("/orders")
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

export const place_Order = (orderData, navigate, dispatch) => {
  axios
    .post("/orders/place-order", orderData)
    .then((res) => {
      if (res.data.success) {
        console.log(orderData);
        const message = res.data.message,
          type = "success";
        dispatch(showAlert({ message, type }));
        const { id } = res.data;
        navigate(`/orderinfo/${id}`);
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
