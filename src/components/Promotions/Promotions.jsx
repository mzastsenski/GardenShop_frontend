import s from "./Promotions.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";

export default function Categories() {
  const products = useSelector((state) => state.data.products);
  const num = Math.floor(Math.random() * (products.length - 5));
  return (
    <section className={s.promotions}>
      <h1>Promotions</h1>
      {products.length > 0 && (
        <div className={s.promotions_container}>
          <ProductCard {...products[num]} />
          <ProductCard {...products[num + 2]} />
          <ProductCard {...products[num + 5]} />
        </div>
      )}
    </section>
  );
}
