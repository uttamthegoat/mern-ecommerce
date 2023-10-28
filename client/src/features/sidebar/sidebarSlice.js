import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    showSidebar: (state, action) => {
      return { open: true };
    },
    hideSidebar: (state, action) => {
      return { open: false };
    },
  },
});

export const selectSidebar = (state) => state.sidebar;

export const { showSidebar, hideSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
