import { configureStore } from "@reduxjs/toolkit";
import data from "./slices/dataSlice";
import user from "./slices/userSlice";
import cart from "./slices/cartSlice";
import wishlist from "./slices/wishlistSlice";
import orders from "./slices/ordersSlice";

const store = configureStore({
  reducer: { data, user, cart, wishlist, orders },
});

export { store };
