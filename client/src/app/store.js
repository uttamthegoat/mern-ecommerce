import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "../features/alert/alertSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import usersReducer from "../features/user/userSlice";
import searchReducer from "../features/search/searchSlice";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    sidebar: sidebarReducer,
    user: usersReducer,
    search: searchReducer,
  },
});

export default store;
