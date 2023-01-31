import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CartPage from "./pages/CartPage/CartPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDescrPage from "./pages/ProductDescrPage/ProductDescrPage";
import LoginPage from "./pages/AuthPages/LoginPage";
import SignupPage from "./pages/AuthPages/SignupPage";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "./requests/categories";
import { getProducts } from "./requests/products";
import { setUser } from "./store/slices/dataSlice";
import { setCart } from "./store/slices/cartSlice";
import { setWishlist } from "./store/slices/wishlistSlice";
import { checkUser } from "./requests/auth";
import { getCart, saveCart } from "./requests/cart";
import { getWishlist, saveWishlist } from "./requests/wishlist";

export default function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.data);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    const userLocal = localStorage.getItem("user");
    if (userLocal) {
      dispatch(checkUser(userLocal));
      dispatch(setUser(userLocal));
    }
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(getCart({ user }));
      dispatch(getWishlist({ user }));
    } else {
      const cartLocal = JSON.parse(localStorage.getItem("cart"));
      if (cartLocal && cartLocal.length) dispatch(setCart(cartLocal));
      const wishlistLocal = JSON.parse(localStorage.getItem("wishlist"));
      if (wishlistLocal && wishlistLocal.length)
        dispatch(setWishlist(wishlistLocal));
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (user) {
      saveCart({ user, cart });
      saveWishlist({ user, wishlist });
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [user, cart, wishlist]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:categoryID" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDescrPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>
    </Routes>
  );
}
