import { useState } from "react";

export function useWishlist() {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (payload) => {
    const target_product = wishlist.find((el) => el === payload);
    if (!target_product) setWishlist([...wishlist, payload]);
  };

  const removeFromWishlist = (payload) => {
    setWishlist(wishlist.filter((el) => el !== payload));
  };

  return { wishlist, setWishlist, addToWishlist, removeFromWishlist };
}
