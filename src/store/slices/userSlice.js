import { createSlice } from "@reduxjs/toolkit";
import { checkUser, login_req, signUp_req } from "../../requests/auth";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [login_req.fulfilled]: (state, action) => {
      if (action.payload === 401) {
        alert("Login Fault");
      } else {
        state.user = action.payload;
        localStorage.setItem("user", action.payload);
        localStorage.setItem("cart", JSON.stringify([]));
        localStorage.setItem("wishlist", JSON.stringify([]));
      }
    },
    [signUp_req.fulfilled]: (_, action) => {
      if (action.payload === 401) alert("User exists");
      else window.location.replace("/Login");
    },
    [checkUser.fulfilled]: (state, action) => {
      if (action.payload !== 200) {
        state.user = "";
        localStorage.setItem("user", "");
      }
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
