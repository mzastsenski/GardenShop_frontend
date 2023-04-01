import { useState } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (payload) => {
    const target_product = cart.find((e) => e.id === payload);
    if (target_product) {
      target_product.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { id: payload, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProduct = (payload) => {
    setCart(cart.filter((e) => e.id !== payload));
  };

  const incrementQuantity = (payload) => {
    const target_product = cart.find((e) => e.id === payload);
    target_product.quantity++;
    setCart([...cart]);
  };

  const decrementQuantity = (payload) => {
    const target_product = cart.find((e) => e.id === payload);
    target_product.quantity === 1
      ? setCart(cart.filter((e) => e.id !== payload))
      : target_product.quantity--;
    setCart([...cart]);
  };

  return {
    cart,
    setCart,
    addToCart,
    clearCart,
    deleteProduct,
    incrementQuantity,
    decrementQuantity,
  };
}
