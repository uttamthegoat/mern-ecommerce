import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  message: "",
  show: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      const { message, type } = action.payload;
      return { ...state, message, type, show: true };
    },
    hideAlert: (state) => {
      return { ...state, show: false };
    },
  },
});

export const selectAlert = (state) => state.alert;

export const { showAlert, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;
