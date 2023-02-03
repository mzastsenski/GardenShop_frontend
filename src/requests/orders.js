import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrders = createAsyncThunk("orders/getOrders", (data) =>
  fetch("/orders/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
);

export const deleteOrder = (id) => {
  fetch(`/orders/delete/${id}`, {
    method: "DELETE",
  });
};
