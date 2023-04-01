export const getWishlist = (data, setWishlist) => {
  fetch(`/wishlist/get`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(setWishlist);
};

export const saveWishlist = (data) =>
  fetch(`/wishlist/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
