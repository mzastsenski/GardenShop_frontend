import { createSlice } from "@reduxjs/toolkit";
import { getOrders } from "../../requests/orders";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    order: [],
  },
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    removeOrder: (state, action) => {
      state.orders = state.orders.filter((e) => e.id !== action.payload);
    },
  },
  extraReducers: {
    [getOrders.fulfilled]: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { setOrder, removeOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
