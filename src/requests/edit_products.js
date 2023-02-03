export const editProduct = (data) =>
  fetch(`/editproducts/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });

export const newProduct = (data) =>
  fetch(`/editproducts/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });

export const deleteProduct = (id) => {
  fetch(`/editproducts/delete/${id}`, {
    method: "DELETE",
  });
};
