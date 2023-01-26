import { useEffect, useState } from "react";
import s from "./ProductsPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryProducts } from "../../requests/categories";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { categoryID } = useParams();
  const { categoryProducts, categories } = useSelector((state) => state.data);
  const [categoryName, setCategory] = useState("");

  useEffect(() => {
    dispatch(getCategoryProducts(categoryID));
  }, [categoryID, dispatch]);

  useEffect(() => {
    const target_category = categories.find((e) => e.id === +categoryID);
    if (target_category) setCategory(target_category.title);
  }, [categories, categoryID]);

  return (
    <div className={s.products_page}>
      <h2>{categoryName}</h2>
      <div className={s.products_container}>
        {categoryProducts.map((e) => (
          <ProductCard key={e.id} {...e} />
        ))}
      </div>
    </div>
  );
}
