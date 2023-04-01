import { getCategories } from "../requests/categories";
import { getProducts } from "../requests/products";
import { checkUser } from "../requests/auth";
import { getCart, saveCart } from "../requests/cart";
import { getWishlist, saveWishlist } from "../requests/wishlist";

export const getData = (
  setUser,
  setCategories,
  setProducts,
  setFirstRender
) => {
  getCategories(setCategories);
  getProducts(setProducts, setFirstRender);
  const user = localStorage.getItem("user");
  if (user) {
    checkUser(user, setUser);
    setUser(user);
  }
};

export const getUserData = (user, setCart, setWishlist) => {
  if (user) {
    getCart({ user }, setCart);
    getWishlist({ user }, setWishlist);
  } else {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (cart && cart.length) setCart(cart);
    if (wishlist && wishlist.length) setWishlist(wishlist);
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
