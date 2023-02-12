import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getCategoryProducts } from "../../requests/categories";
import { getProducts } from "../../requests/products";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    categories: [],
    products: [],
    renderProducts: [],
    firstRender: [],
  },
  reducers: {
    setRenderProducts: (state, action) => {
      state.renderProducts = action.payload;
      state.firstRender = action.payload;
    },
    sortProducts: (state, action) => {
      if (action.payload === "default") {
        state.renderProducts = state.firstRender;
      } else if (typeof state.renderProducts[0][action.payload] === "string") {
        state.renderProducts.sort((a, b) =>
          a[action.payload].localeCompare(b[action.payload])
        );
      } else if (action.payload === "price") {
        state.renderProducts.sort(
          (a, b) => a[action.payload] - b[action.payload]
        );
      } else {
        state.renderProducts.sort((a, b) => b["price"] - a["price"]);
      }
    },
    searchPrice: (state, action) => {
      const { min_value, max_value } = action.payload;
      state.renderProducts.map((elem) => {
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
    },
    [getCategoryProducts.fulfilled]: (state, action) => {
      state.renderProducts = action.payload;
      state.firstRender = action.payload;
    },
  },
});

export const { setRenderProducts, sortProducts, searchPrice, removeProduct } =
  dataSlice.actions;

export default dataSlice.reducer;
