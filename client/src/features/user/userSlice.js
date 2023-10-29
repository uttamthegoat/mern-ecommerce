import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  gender: "",
  userImage: "",
  phoneNumber: "",
  isAdmin: false,
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfo: (state, action) => {
      const { name, email, gender, userImage, phoneNumber, isAdmin, address } =
        action.payload;
      const userInfo = {
        name,
        email,
        gender,
        userImage,
        phoneNumber,
        isAdmin,
        address,
      };
      return { ...userInfo };
    },
  },
});

export const selectUser = (state) => state.user;

export const { getUserInfo } = userSlice.actions;

export default userSlice.reducer;
