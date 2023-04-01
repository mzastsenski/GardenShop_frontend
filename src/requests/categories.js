export const getCategories = (setCategories) => {
  fetch("/category/all")
    .then((res) => res.json())
    .then(setCategories);
};

export const getCategoryProducts = (id, setProducts, setFirstRender) => {
  fetch(`/category/${id}`)
    .then((res) => res.json())
    .then((res) => {
      setProducts(res);
      setFirstRender([...res]);
    });
};
