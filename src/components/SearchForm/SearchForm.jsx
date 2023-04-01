import s from "./SearchForm.module.scss";
import { useStore } from "../../store";

export default function SearchForm() {
  const {
    data: { searchPrice },
  } = useStore();

  const search = (e) => {
    e.preventDefault();
    const { min, max } = e.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity; // or Number.MAX_VALUE;
    searchPrice({ min_value, max_value });
  };
  return (
    <div>
      <span>Price: </span>
      <form className={s.search_form} onSubmit={search}>
        <input type="text" placeholder="from" name="min" />
        <input type="text" placeholder="to" name="max" />
        <button>Search</button>
      </form>
    </div>
  );
}
