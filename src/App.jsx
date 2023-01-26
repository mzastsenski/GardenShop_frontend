import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CartPage from "./pages/CartPage/CartPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDescrPage from "./pages/ProductDescrPage/ProductDescrPage";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "./requests/categories";
import { getProducts } from "./requests/products";
import { setCart } from "./store/slices/cartSlice";

export default function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem("cart"));
    if (cartLocal && cartLocal.length) dispatch(setCart(cartLocal));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:categoryID" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDescrPage />} />
      </Route>
    </Routes>
  );
}
