import axios from "../../utils/axiosConfig";



// create products in admin page
export const a1 = ( navigate, dispatch) => {
    axios
      .post()
      .then((res) => {
        if (res.data.success) {
          
          dispatch();
          navigate();
        }
      })
      .catch((error) => {
        const message = error.response.data.message,
          type = "error";
        dispatch();
      });
  };



//get all the product details in the admin page
export const a2 = (loginDet, navigate, dispatch) => {
    axios
      .post()
      .then((res) => {
        if (res.data.success) {
          
          dispatch();
          navigate();
        }
      })
      .catch((error) => {
        const message = error.response.data.message,
          type = "error";
        dispatch();
      });
  };



// edit products in admin page
  export const a3 = (loginDet, navigate, dispatch) => {
    axios
      .post()
      .then((res) => {
        if (res.data.success) {
          
          dispatch();
          navigate();
        }
      })
      .catch((error) => {
        const message = error.response.data.message,
          type = "error";
        dispatch();
      });
  };


// Delete products in admin page
export const a4 = (loginDet, navigate, dispatch) => {
    axios
      .post()
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
        dispatch();
      });
  };