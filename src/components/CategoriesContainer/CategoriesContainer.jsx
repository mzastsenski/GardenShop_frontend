import s from "./CategoriesContainer.module.scss";
import CategoryCard from "../CategoryCard/CategoryCard";
import { useStore } from "../../store";

export default function CategoriesContainer({ count = Number.MAX_VALUE }) {
  const {
    data: { categories },
  } = useStore();

  return (
    <div className={s.categories_container}>
      {categories
        .filter((_, i) => i < count)
        .map((e) => (
          <CategoryCard key={e.id} {...e} />
        ))}
    </div>
  );
}
