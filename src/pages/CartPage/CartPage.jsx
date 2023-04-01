import s from "./CartPage.module.scss";
import { useForm } from "react-hook-form";
import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { clearCart } from "../../store/slices/cartSlice";
import { getProductInfo } from "../../requests/products";
import { buyProducts } from "../../requests/cart";
import { MdNavigateNext } from "react-icons/md";
import { useStore } from "../../store";

export default function CartPage() {
  const navigate = useNavigate();
  const {
    user: { user },
    cart: { cart },
  } = useStore();
  const [cartToRender, setCartToRender] = useState([]);

  const total = cartToRender
    .reduce(
      (total, { discont_price, quantity }) => total + discont_price * quantity,
      0
    )
    .toFixed(2);

  const setCartProducts = useCallback(async () => {
    const promises = cart.map(({ id }) => getProductInfo(id));
    const promisesResult = await Promise.all(promises);
    const cartProducts = promisesResult.map((e, i) => ({
      quantity: cart[i].quantity,
      ...e,
    }));
    setCartToRender(cartProducts);
  }, [cart]);

  useEffect(() => {
    setCartProducts();
  }, [cart, setCartProducts]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const buyCartProducts = (data) => {
    console.log(data.phone);
    if (user) {
      reset();
      clearCart();
      buyProducts({ cart: cartToRender, user });
      navigate("/orders");
    } else {
      navigate("/login");
    }
  };

  const phoneRegister = register("phone", {
    pattern: {
      value: /^(\+\d{1,3}\s?)?((\(\d{3,5}\)|\d{3,5})(\s)?)\d{3,8}$/,
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
          <button className={s.clear_cart_button} onClick={() => clearCart()}>
            Clear Cart
          </button>
        )}
      </div>
      {cart.length > 0 && (
        <div className={s.order_details}>
          <h2>Order details</h2>
          <div className={s.total}>
            <span>Total</span>
            <span>{total}€</span>
          </div>
          <form onSubmit={handleSubmit(buyCartProducts)}>
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
      )}
    </div>
  );
}
