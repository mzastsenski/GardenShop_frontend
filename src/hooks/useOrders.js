import { useState } from "react";

export function useOrders() {
  const [order, setOrder] = useState([]);
  const [orders, setOrders] = useState([]);

  const removeOrder = (payload) => {
    setOrders(orders.filter((e) => e.id !== payload));
  };

  return { order, orders, setOrder, setOrders, removeOrder };
}
