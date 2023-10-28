import axios from "../../utils/axiosConfig";
import { showAlert } from "../../features/alert/alertSlice";

export const login_User = (loginDet, navigate, dispatch) => {
  axios
    .post("/auth/login", loginDet)
    .then((res) => {
      if (res.data.success) {
        //   localStorage.setItem("authenticate", true);
        const message = res.data.message,
          type = "success";
        dispatch(showAlert({ message, type }));
        navigate("/");
      }
    })
    .catch((error) => {
      const message = error.response.data.message,
        type = "error";
      dispatch(showAlert({ message, type }));
    });
};

export const logout_User = (navigate, dispatch) => {
  axios
    .get("/auth/logout")
    .then((res) => {
      if (res.data.success) {
        const message = res.data.message,
          type = "success";
        dispatch(showAlert({ message, type }));
        navigate("/auth");
      }
    })
    .catch((error) => {
      const message = error.response.data.message,
        type = "error";
      dispatch(showAlert({ message, type }));
    });
};
