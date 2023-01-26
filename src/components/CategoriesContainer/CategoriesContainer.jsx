import s from "./CategoriesContainer.module.scss";
import CategoryCard from "../CategoryCard/CategoryCard";
import { useSelector } from "react-redux";

export default function CategoriesContainer({ count = Number.MAX_VALUE }) {
  const { categories } = useSelector((state) => state.data);

  return (
    <div className={s.categories_container}>
      {categories
        .filter((e, i) => i < count)
        .map((e) => (
          <CategoryCard key={e.id} {...e} />
        ))}
    </div>
  );
}
