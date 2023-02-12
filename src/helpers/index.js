import { getCategories } from "../requests/categories";
import { getProducts } from "../requests/products";
import { setUser } from "../store/slices/userSlice";
import { setCart } from "../store/slices/cartSlice";
import { setWishlist } from "../store/slices/wishlistSlice";
import { checkUser } from "../requests/auth";
import { getCart, saveCart } from "../requests/cart";
import { getWishlist, saveWishlist } from "../requests/wishlist";

export const getData = (dispatch) => {
  dispatch(getCategories());
  dispatch(getProducts());
  const user = localStorage.getItem("user");
  if (user) {
    dispatch(checkUser(user));
    dispatch(setUser(user));
  }
};

export const getUserData = (user, dispatch) => {
  if (user) {
    dispatch(getCart({ user }));
    dispatch(getWishlist({ user }));
  } else {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (cart && cart.length) dispatch(setCart(cart));
    if (wishlist && wishlist.length) dispatch(setWishlist(wishlist));
  }
};

export const saveUserData = (user, cart, wishlist) => {
  if (user) {
    saveCart({ user, cart });
    saveWishlist({ user, wishlist });
  } else {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
};
