import React from "react";
import s from "./MainPage.module.scss";
import CategoriesContainer from "../../components/CategoriesContainer/CategoriesContainer";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className={s.main_page}>
      <section className={s.sale}>
        <h1 id="sale">Christmas sale</h1>
        <div>
          <button>All promotions</button>
          <button>Read more</button>
        </div>
        <img src="images/sale_image.png" alt="" />
      </section>
      <section id="categories" className={s.categories}>
        <h2>
          Categories{" "}
          <Link to="/categories">
            <button>All categories</button>
          </Link>
        </h2>
        <CategoriesContainer count={4} />
      </section>
    </div>
  );
}
