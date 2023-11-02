import { faL } from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    formSubmit: (state, action) => {
      return true;
    },
    closeForm: (state, action) => {
      return false;
    },
  },
});

export const selectSearch = (state) => state.search;

export const { formSubmit, closeForm } = searchSlice.actions;

export default searchSlice.reducer;
