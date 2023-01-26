import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("data/getProducts", () =>
  fetch("/products/all").then((res) => res.json())
);
