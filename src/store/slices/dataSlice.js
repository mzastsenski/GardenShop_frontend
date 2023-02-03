import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getCategoryProducts } from "../../requests/categories";
import { getProducts } from "../../requests/products";
import { checkUser, login_req, signUp_req } from "../../requests/auth";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    user: "",
    categories: [],
    products: [],
    categoryProducts: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((e) => e.id !== action.payload);
    },
  },
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
    [getCategoryProducts.fulfilled]: (state, action) => {
      state.categoryProducts = action.payload;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
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

export const { setUser, removeProduct } = dataSlice.actions;

export default dataSlice.reducer;
