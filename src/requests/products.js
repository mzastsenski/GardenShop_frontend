export const getProducts = (setProducts, setFirstRender) => {
  fetch("/products/all")
    .then((res) => res.json())
    .then((res) => {
      setProducts(res);
      setFirstRender([...res]);
    });
};

export const getProduct = async (id, callback) => {
  const result = await fetch(`/products/${id}`).then((res) => res.json());
  callback(result);
};

export const getProductInfo = (id) =>
  fetch(`/products/${id}`).then((res) => res.json());
