import s from "./Promotions.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { useStore } from "../../store";

export default function Categories() {
  const {
    data: { products },
  } = useStore();

  const [promotions, setPromotions] = useState([]);
  const [num, setNum] = useState(0);

  useEffect(() => {
    setPromotions(
      products.filter((e) => e.discont_price !== e.price && !e.hide)
    );
    setNum(Math.floor(Math.random() * (promotions.length - 3)));
  }, [products, promotions.length]);

  return (
    <section id="promotions" className={s.promotions}>
      <h1>Promotions</h1>
      {promotions.length > 0 && (
        <div className={s.promotions_container}>
          <ProductCard {...promotions[num]} />
          <ProductCard {...promotions[num + 2]} />
          <ProductCard {...promotions[num + 3]} />
        </div>
      )}
    </section>
  );
}
