import { createContext, useContext, useEffect } from "react";
import { useData } from "./hooks/useData";
import { useUser } from "./hooks/useUser";
import { useCart } from "./hooks/useCart";
import { useWishlist } from "./hooks/useWishlist";
import { useOrders } from "./hooks/useOrders";
import { getData, getUserData, saveUserData } from "./helpers";

const GlobalContext = createContext({});

export const useStore = () => useContext(GlobalContext);

export const StoreProvider = ({ children }) => {
  const data = useData();
  const user = useUser();
  const cart = useCart();
  const wishlist = useWishlist();
  const orders = useOrders();
  const { setUser } = user;
  const { setCart } = cart;
  const { setWishlist } = wishlist;
  const { setCategories, setProducts, setFirstRender } = data;

  useEffect(() => {
    getData(setUser, setCategories, setProducts, setFirstRender);
  }, [setUser, setCategories, setProducts, setFirstRender]);

  useEffect(() => {
    getUserData(user.user, setCart, setWishlist);
  }, [user.user, setCart, setWishlist]);

  useEffect(() => {
    saveUserData(user.user, cart.cart, wishlist.wishlist);
  }, [user.user, cart.cart, wishlist.wishlist]);

  const store = { data, cart, user, wishlist, orders };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};
