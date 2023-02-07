import s from "./OrdersPage.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Order from "../../components/Order/Order";
import { getOrders } from "../../requests/orders";

export default function OrdersPage() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) dispatch(getOrders({ user }));
  }, [user, dispatch]);

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
