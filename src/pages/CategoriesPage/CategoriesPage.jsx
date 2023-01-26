import React from "react";
import s from "./CategoriesPage.module.scss";
import CategoriesContainer from "../../components/CategoriesContainer/CategoriesContainer";

export default function CategoriesPage() {
  return (
    <div className={s.categories_page}>
      <h2>Categories</h2>
      <CategoriesContainer />
    </div>
  );
}
