import s from "./ProductsPage.module.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryProducts } from "../../requests/categories";
import ProductCard from "../../components/ProductCard/ProductCard";
import { setRenderProducts } from "../../store/slices/dataSlice";
import Checkbox from "../../components/Checkbox/Checkbox";
import SortProducts from "../../components/SortProducts/SortProducts";
import SearchForm from "../../components/SearchForm/SearchForm";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { categoryID } = useParams();
  const { categories, products, renderProducts } = useSelector(
    (state) => state.data
  );
  const [categoryName, setCategoryName] = useState("");
  const [checked, setChecked] = useState(false);
  const testID = !isNaN(+categoryID) ? true : false;
  const checkbox = (e) => setChecked(e.target.checked);

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

  /////  Infinite scroll  /////
  const [slice, setSlice] = useState(16);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight - 120;
    if (bottom) setSlice((prev) => prev + 4);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={s.products_page}>
      <h2>{categoryName}</h2>

      <div className={s.actions}>
        <SearchForm />
        <div>
          <div onClick={checkbox}>
            <Checkbox text="Discounted items" />
          </div>
          <SortProducts />
        </div>
      </div>

      <div className={s.products_container}>
        {renderProducts
          .filter((e) => {
            if (checked) return e.discont_price !== e.price && !e.hide;
            else return !e.hide;
          })
          .slice(0, slice)
          .map((e) => (
            <ProductCard key={e.id} {...e} />
          ))}
      </div>
    </div>
  );
}
