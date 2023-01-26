import React from "react";
import s from "./CategoryCard.module.scss";
import { Link } from "react-router-dom";

export default function CategoryCard({ id, title, image }) {
  return (
    <Link to={`/categories/${id}`} className={s.category_card}>
      <img src={image} alt="" />
      <p>{title}</p>
    </Link>
  );
}
