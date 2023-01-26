import s from "./CartPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../../components/CartCard/CartCard";
import { clearCart } from "../../store/slices/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const clear = () => dispatch(clearCart());
  return (
    <div>
      <h2>Cart</h2>
      <div className={s.cart_container}>
        {cart.map((e) => (
          <CartCard key={e.id} {...e} />
        ))}
        {!cart.length && <h3>No Product in the cart</h3>}
      </div>
      {cart.length > 0 && <button onClick={clear}>Clear Cart</button>}
    </div>
  );
}
