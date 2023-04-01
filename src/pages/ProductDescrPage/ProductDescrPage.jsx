import s from "./ProductDescrPage.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../requests/products";
import { useStore } from "../../store";

export default function ProductDescrPage() {
  const {
    cart: { addToCart },
  } = useStore();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { title, image, description, price, discont_price } = product;
  const Discount = (100 - (discont_price / price) * 100).toFixed(0);

  useEffect(() => {
    getProduct(id, setProduct);
  }, [id]);

  const add = () => addToCart(+id);

  const className =
    Discount > 0 ? s.price_info : [s.price_info, s.price_info2].join(" ");

  return (
    <div className={s.wrapper}>
      <div className={s.product_descr}>
        <div>
          <h2 className={s.title}> {title}</h2>
          {image && <img src={image} alt={title} />}
        </div>

        <div className={s.product_info}>
          <div className={className}>
            <span>{discont_price}€ </span>
            {Discount > 0 && <span>{price}€ </span>}
            {Discount > 0 && <span>-{Discount}%</span>}
          </div>

          <button className={s.add_button} onClick={add}>
            Add to Cart
          </button>
          <div className={s.description}>
            <h3>Description: </h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
