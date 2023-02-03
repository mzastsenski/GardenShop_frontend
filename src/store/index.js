import { configureStore } from "@reduxjs/toolkit";
import data from "./slices/dataSlice";
import cart from "./slices/cartSlice";
import wishlist from "./slices/wishlistSlice";
import orders from "./slices/ordersSlice";

const store = configureStore({
  reducer: { data, cart, wishlist, orders },
});

export { store };
