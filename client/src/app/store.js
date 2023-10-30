import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "../features/alert/alertSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import usersReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    sidebar: sidebarReducer,
    user: usersReducer,
  },
});

export default store;
