import s from "./SortProducts.module.scss";
import { useStore } from "../../store";

export default function SortProducts() {
  const {
    data: { sortProducts },
  } = useStore();

  return (
    <div className={s.sort_products}>
      <span>Sorted :</span>
      <select
        className={s.sort_select}
        onInput={(e) => sortProducts(e.target.value)}
      >
        <option value="default">by default</option>
        <option value="title">title</option>
        <option value="price">price</option>
        <option value="descending">price descending</option>
      </select>
    </div>
  );
}
