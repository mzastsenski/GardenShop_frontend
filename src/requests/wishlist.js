import { createAsyncThunk } from "@reduxjs/toolkit";

export const getWishlist = createAsyncThunk("data/getWishlist", (data) =>
  fetch(`/wishlist/get`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
);

export const saveWishlist = (data) =>
  fetch(`/wishlist/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
