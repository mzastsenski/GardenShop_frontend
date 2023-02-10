import s from "./CartPage.module.scss";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { clearCart } from "../../store/slices/cartSlice";
import { getProductInfo } from "../../requests/products";
import { buyProducts } from "../../requests/cart";
import { MdNavigateNext } from "react-icons/md";

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const [cartToRender, setCartToRender] = useState([]);

  const total = cartToRender
    .reduce(
      (total, { discont_price, quantity }) => total + discont_price * quantity,
      0
    )
    .toFixed(2);

  useEffect(() => {
    setCartProducts();
  }, [cart]);

  const setCartProducts = async () => {
    const promises = cart.map(({ id }) => getProductInfo(id));
    const promisesResult = await Promise.all(promises);
    const cartProducts = promisesResult.map((e, i) => ({
      quantity: cart[i].quantity,
      ...e,
    }));
    setCartToRender(cartProducts);
  };

  const clear = () => dispatch(clearCart());

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const buy_products = (data) => {
    console.log(data.phone);
    reset();
    dispatch(clearCart());
    buyProducts({ cart: cartToRender, user });
    navigate("/orders");
  };

  const phoneRegister = register("phone", {
    pattern: {
      value: /^([+](\d{1,3})\s?)?((\(\d{3,5}\)|\d{3,5})(\s)?)\d{3,8}$/,
      message: "*Enter valid phone number",
    },
  });

  return (
    <div className={s.cart_page}>
      <div className={s.cart}>
        <div className={s.header}>
          <h2>Shopping cart</h2>
          <Link to={"/categories"}>
            Back to the Store <MdNavigateNext color="#A7A7A7" size={25} />
          </Link>
        </div>
        <div className={s.cart_container}>
          {cart.length > 0 &&
            cartToRender.map((e) => <CartItem key={e.id} {...e} />)}
          {!cart.length && <h2>No products in the cart</h2>}
        </div>
        {cart.length > 0 && (
          <button className={s.clear_cart_button} onClick={clear}>
            Clear Cart
          </button>
        )}
      </div>
      <div className={s.order_details}>
        <h2>Order details</h2>
        <div className={s.total}>
          <span>Total</span>
          <span>{total}€</span>
        </div>
        <form onSubmit={handleSubmit(buy_products)}>
          <input
            type="text"
            name="phone"
            defaultValue={"+49"}
            {...phoneRegister}
          />
          <button className={s.order_button}>Order</button>
        </form>
        <div>{errors.phone && <p>{errors.phone?.message}</p>}</div>
      </div>
    </div>
  );
}
