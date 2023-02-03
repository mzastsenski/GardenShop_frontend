import s from "./ProductDescrPage.module.scss";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../requests/products";
import { addToCart } from "../../store/slices/cartSlice";

export default function ProductDescrPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const { title, image, description, price } = product;

  useEffect(() => {
    getProduct(id, setProduct);
  }, [id]);

  const add = () => dispatch(addToCart(+id));

  return (
    <div className={s.wrapper}>
      <div className={s.product_descr}>
        {image && <img src={image} alt={title} />}
        <div className={s.product_info}>
          <h2 className={s.title}> {title}</h2>
          <p>{description}</p>
          <div>
            <p>
              <strong> Price: </strong>
              {price}€
            </p>
            <button
              // style={button_style}
              className={s.add_button}
              onClick={add}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
