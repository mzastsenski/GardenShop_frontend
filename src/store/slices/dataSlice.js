import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getCategoryProducts } from "../../requests/categories";
import { getProducts } from "../../requests/products";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    categories: [],
    products: [],
    firstRender: [],
  },
  reducers: {
    sortProducts: (state, action) => {
      if (action.payload === "default") {
        state.products = state.firstRender;
      } else if (typeof state.products[0][action.payload] === "string") {
        state.products.sort((a, b) =>
          a[action.payload].localeCompare(b[action.payload])
        );
      } else if (action.payload === "price") {
        state.products.sort((a, b) => a[action.payload] - b[action.payload]);
      } else {
        state.products.sort((a, b) => b["price"] - a["price"]);
      }
    },
    searchPrice: (state, action) => {
      const { min_value, max_value } = action.payload;
      state.products.map((elem) => {
        if (elem.price >= min_value && elem.price <= max_value) {
          elem.hide = false;
        } else {
          elem.hide = true;
        }
        return elem;
      });
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((e) => e.id !== action.payload);
    },
  },
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.firstRender = action.payload;
    },
    [getCategoryProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.firstRender = action.payload;
    },
  },
});

export const { sortProducts, searchPrice, removeProduct } = dataSlice.actions;

export default dataSlice.reducer;
