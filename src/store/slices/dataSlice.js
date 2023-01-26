import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getCategoryProducts } from "../../requests/categories";
import { getProducts } from "../../requests/products";

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
  },
});

export const { setUser } = dataSlice.actions;

export default dataSlice.reducer;
