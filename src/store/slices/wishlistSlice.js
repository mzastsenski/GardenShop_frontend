import { createSlice } from "@reduxjs/toolkit";
import { getWishlist } from "../../requests/wishlist";

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
      const target_product = state.wishlist.find((el) => el === action.payload);
      if (!target_product) state.wishlist = [...state.wishlist, action.payload];
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((el) => el !== action.payload);
    },
  },
  extraReducers: {
    [getWishlist.fulfilled]: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export const { setWishlist, addToWishlist, removeFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
