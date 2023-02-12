import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CartPage from "./pages/CartPage/CartPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDescrPage from "./pages/ProductDescrPage/ProductDescrPage";
import LoginPage from "./pages/AuthPages/LoginPage";
import SignupPage from "./pages/AuthPages/SignupPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import EditProductsPage from "./pages/EditProductsPages/EditProductsPage";
import EditProductPage from "./pages/EditProductsPages/EditProductPage";
import NewProductPage from "./pages/EditProductsPages/NewProductPage";
import { getData, getUserData, saveUserData } from "./helpers";

export default function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);

  useEffect(() => {
    getData(dispatch);
  }, [dispatch]);

  useEffect(() => {
    getUserData(user, dispatch);
  }, [user, dispatch]);

  useEffect(() => {
    saveUserData(user, cart, wishlist);
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
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/editproducts" element={<EditProductsPage />} />
        <Route path="/editproduct/:id" element={<EditProductPage />} />
        <Route path="/newproduct" element={<NewProductPage />} />
      </Route>
    </Routes>
  );
}
