import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
    addToWishlist: (state, action) => {
      const id = action.payload;
      const target_product = state.wishlist.find((e) => e.id === id);
      if (target_product) {
        target_product.quantity++;
        state.wishlist = [...state.wishlist];
      } else {
        state.wishlist = [...state.wishlist, { id, quantity: 1 }];
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((e) => e.id !== action.payload);
    },
  },
});

export const { setWishlist, addToWishlist, removeFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
