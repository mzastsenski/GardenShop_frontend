import s from "./SortProducts.module.scss";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../store/slices/dataSlice";

export default function SortProducts() {
  const dispatch = useDispatch();
  const sort_products = (e) => dispatch(sortProducts(e.target.value));
  return (
    <div className={s.sort_products}>
      <span>Sorted :</span>
      <select className={s.sort_select} onInput={sort_products}>
        <option value="default">by default</option>
        <option value="title">title</option>
        <option value="price">price</option>
        <option value="descending">price descending</option>
      </select>
    </div>
  );
}
