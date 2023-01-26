import React from "react";
import s from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

export default function CategoryCard({
  id,
  title,
  image,
  price,
  discont_price,
}) {
  const dispatch = useDispatch();
  const Discount = (100 - (discont_price / price) * 100).toFixed(0);

  const add = () => {
    dispatch(
      addToCart({
        id,
        title,
        image,
        price,
        discont_price,
      })
    );
  };

  return (
    <div className={s.product_card}>
      <button className={s.add_button} onClick={add}>
        Add to cart
      </button>
      <Link to={`/product/${id}`}>
        <img src={image} alt="" />
        <div to={`/product/${id}`} className={s.price_info}>
          <span>{price}€ </span>
          <span>{discont_price}€ </span>
          <span>-{Discount}%</span>
        </div>
        <p>{title}</p>{" "}
      </Link>
    </div>
  );
}
