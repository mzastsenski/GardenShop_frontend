import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCart = createAsyncThunk("data/getCart", (data) =>
  fetch(`/cart/get`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
);

export const saveCart = (data) =>
  fetch(`/cart/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });

export const buyProducts = (data) =>
  fetch(`/orders/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
