import { useState } from "react";

export const useData = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [firstRender, setFirstRender] = useState([]);

  const sortProducts = (payload) => {
    if (payload === "default") {
      setProducts(firstRender);
    } else if (typeof products[0][payload] === "string") {
      setProducts([
        ...products.sort((a, b) => a[payload].localeCompare(b[payload])),
      ]);
    } else if (payload === "price") {
      setProducts([...products.sort((a, b) => a[payload] - b[payload])]);
    } else {
      setProducts([...products.sort((a, b) => b["price"] - a["price"])]);
    }
  };

  const searchPrice = (payload) => {
    const { min_value, max_value } = payload;
    setProducts(
      products.map((elem) => {
        if (elem.price >= min_value && elem.price <= max_value) {
          elem.hide = false;
        } else {
          elem.hide = true;
        }
        return elem;
      })
    );
  };

  const removeProduct = (payload) => {
    setProducts(products.filter((e) => e.id !== payload));
  };

  return {
    products,
    categories,
    firstRender,
    setProducts,
    setCategories,
    setFirstRender,
    sortProducts,
    searchPrice,
    removeProduct,
  };
};
