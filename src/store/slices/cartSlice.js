import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addToCart: (state, action) => {
      const target_product = state.cart.find((e) => e.id === action.payload.id);
      if (target_product) {
        target_product.quantity++;
        state.cart = [...state.cart];
      } else {
        state.cart = [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter((e) => e.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const target_product = state.cart.find((e) => e.id === action.payload);
      target_product.quantity++;
      state.cart = [...state.cart];
    },
    decrementQuantity: (state, action) => {
      const target_product = state.cart.find((e) => e.id === action.payload);
      target_product.quantity === 1
        ? (state.cart = state.cart.filter((e) => e.id !== action.payload))
        : target_product.quantity--;
      state.cart = [...state.cart];
    },
  },
});

export const {
  setCart,
  addToCart,
  clearCart,
  deleteProduct,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
