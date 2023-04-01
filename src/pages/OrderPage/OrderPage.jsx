import s from "./OrderPage.module.scss";
import OrderItem from "../../components/OrderItem/OrderItem";
import { Link } from "react-router-dom";
import { useStore } from "../../store";

export default function OrdersPage() {
  const {
    orders: { order },
  } = useStore();

  const totalPrice = order.reduce(
    (total, { quantity, discont_price }) => total + discont_price * quantity,
    0
  );

  return (
    <div className={s.order_page}>
      <Link to="/orders">
        <button>back</button>
      </Link>

      <div className={s.order_container}>
        <div>
          <p>#</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>

        {order.map((e) => (
          <OrderItem key={e.id} {...e} />
        ))}
      </div>
      <h2>Total price: {totalPrice}€</h2>
    </div>
  );
}
