import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "../features/alert/alertSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
