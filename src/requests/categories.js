import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk("data/getCategories", () =>
  fetch("/category/all").then((res) => res.json())
);

export const getCategoryProducts = createAsyncThunk(
  "data/getCategoryProducts",
  (id) => fetch(`/category/${id}`).then((res) => res.json())
);
