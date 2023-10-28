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

export const generate_Otp = (email, dispatch) => {
  axios
    .post("/auth/generate-otp", { email })
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
    });
};

export const verify_Otp = (otp, setVerifired, dispatch) => {
  axios
    .post("/auth/verify-otp", { otp })
    .then((res) => {
      if (res.data.success) {
        setVerifired(true);
        const message = res.data.message,
          type = "success";
        dispatch(showAlert({ message, type }));
      }
    })
    .catch((error) => {
      const message = error.response.data.message,
        type = "error";
      dispatch(showAlert({ message, type }));
    });
};

export const signup_User = (signupDet, navigate, dispatch) => {
  axios
    .post("/auth/signup", signupDet)
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
    });
};
