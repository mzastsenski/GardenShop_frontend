export const getOrders = (data, setOrders) => {
  fetch("/orders/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(setOrders);
};

export const deleteOrder = (id) => {
  fetch(`/orders/delete/${id}`, {
    method: "DELETE",
  });
};
