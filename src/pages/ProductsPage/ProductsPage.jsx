import s from "./ProductsPage.module.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryProducts } from "../../requests/categories";
import ProductCard from "../../components/ProductCard/ProductCard";
import {
  setRenderProducts,
  searchPrice,
  sortProducts,
} from "../../store/slices/dataSlice";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { categoryID } = useParams();
  const { categories, products, renderProducts } = useSelector(
    (state) => state.data
  );
  const [categoryName, setCategoryName] = useState("");

  const testID = !isNaN(+categoryID) ? true : false;

  useEffect(() => {
    testID
      ? dispatch(getCategoryProducts(categoryID))
      : dispatch(setRenderProducts(products));
  }, [products, categoryID, testID, dispatch]);

  useEffect(() => {
    if (testID) {
      const target_category = categories.find((e) => e.id === +categoryID);
      if (target_category) setCategoryName(target_category.title);
    } else {
      setCategoryName("Catalog");
    }
  }, [categories, categoryID, testID]);

  const search = (e) => {
    e.preventDefault();
    const { min, max } = e.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity; // or Number.MAX_VALUE;
    dispatch(searchPrice({ min_value, max_value }));
  };

  const sort_products = (e) => dispatch(sortProducts(e.target.value));

  return (
    <div className={s.products_page}>
      <h2>{categoryName}</h2>

      <div className={s.sorting}>
        <span>Price: </span>
        <form className={s.search_form} onSubmit={search}>
          <input type="text" placeholder="from" name="min" />
          <input type="text" placeholder="to" name="max" />
          <button>Search</button>
        </form>
      </div>

      <div>
        <span>Sort By:</span>
        <select className={s.sort_select} onInput={sort_products}>
          <option value="default">default</option>
          <option value="title">title</option>
          <option value="price">price</option>
          <option value="descending">price descending</option>
        </select>
      </div>

      <div className={s.products_container}>
        {renderProducts.filter((e) => !e.hide).map((e) => (
          <ProductCard key={e.id} {...e} />
        ))}
      </div>
    </div>
  );
}
