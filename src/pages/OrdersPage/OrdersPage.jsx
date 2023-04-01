import s from "./OrdersPage.module.scss";
import { useEffect } from "react";
import Order from "../../components/Order/Order";
import { getOrders } from "../../requests/orders";
import { useStore } from "../../store";

export default function OrdersPage() {
  const {
    user: { user },
    orders: { orders, setOrders },
  } = useStore();

  useEffect(() => {
    if (user) getOrders({ user }, setOrders);
  }, [user, setOrders]);

  return (
    <div className={s.orders_page}>
      <h2>Orders</h2>
      {orders.length === 0 ? (
        "no orders"
      ) : (
        <div className={s.orders_container}>
          <div>
            <p>User</p>
            <p>Date</p>
            <p>Order</p>
            {user === "Admin" && <p>Delete</p>}
          </div>
          {orders.map((e) => <Order key={e.id} {...e} />).reverse()}
        </div>
      )}
    </div>
  );
}
