import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("data/getProducts", () =>
  fetch("/products/all").then((res) => res.json())
);

export const getProduct = async (id, callback) => {
  const result = await fetch(`/products/${id}`).then((res) => res.json());
  callback(result);
};

export const getProductInfo = (id) =>
  fetch(`/products/${id}`).then((res) => res.json());
