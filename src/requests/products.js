import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("data/getProducts", () =>
  fetch("/products/all").then((res) => res.json())
);

export const getProduct = createAsyncThunk("data/getProduct", (id) =>
  fetch(`/products/${id}`).then((res) => res.json())
);

export const getProductInfo = (id) =>
  fetch(`/products/${id}`).then((res) => res.json());
