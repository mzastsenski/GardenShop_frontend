import s from "./CartPage.module.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { clearCart } from "../../store/slices/cartSlice";
import { getProductInfo } from "../../requests/products";

export default function CartPage() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const [cartToRender, setCartToRender] = useState([]);

  useEffect(() => {
    setCartProducts();
  }, [cart]);

  const setCartProducts = async () => {
    const result = [];
    for (const { id, quantity } of cart) {
      const productData = await getProductInfo(id);
      result.push({ quantity, ...productData });
    }
    setCartToRender(result);
  };

  const clear = () => dispatch(clearCart());

  return (
    <div>
      <h2>Cart</h2>
      <div className={s.cart_container}>
        {cart.length > 0 &&
          cartToRender.map((e, i) => <CartItem key={i} {...e} />)}
        {!cart.length && <h3>No products in the cart</h3>}
      </div>
      {cart.length > 0 && <button onClick={clear}>Clear Cart</button>}
    </div>
  );
}
