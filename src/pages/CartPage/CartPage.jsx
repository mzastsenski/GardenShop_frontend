import s from "./CartPage.module.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { clearCart } from "../../store/slices/cartSlice";
import { getProductInfo } from "../../requests/products";
import { buyProducts } from "../../requests/cart";

export default function CartPage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
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
  const buy = () => {
    dispatch(clearCart());
    buyProducts({ cart: cartToRender, user });
  };

  return (
    <div className={s.cart_page}>
      <h2>Shopping cart</h2>
      <div className={s.cart_container}>
        {cart.length > 0 &&
          cartToRender.map((e) => <CartItem key={e.id} {...e} />)}
        {!cart.length && <h3>No products in the cart</h3>}
      </div>
      {cart.length > 0 && <button onClick={clear}>Clear Cart</button>}
      {cart.length > 0 && (
        <div>
          <button onClick={buy}>Buy products</button>
        </div>
      )}
    </div>
  );
}
