import s from "./Categories.module.scss";
import { Link } from "react-router-dom";
import CategoriesContainer from "../CategoriesContainer/CategoriesContainer";

export default function Categories() {

  return (
    <section id="categories" className={s.categories}>
      <div className={s.title}>
        <h1>Categories</h1>
        <Link to="/categories">
          <button>All categories</button>
        </Link>
      </div>
      <CategoriesContainer count={4} />
    </section>
  );
}
