import s from "./WishlistItem.module.scss";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/slices/cartSlice";
import { useStore } from "../../store";

export default function WishlistCard({
  id,
  discont_price,
  image,
  price,
  title,
}) {
  const {
    wishlist: { removeFromWishlist },
  } = useStore();
  const Discount = (100 - (discont_price / price) * 100).toFixed(0);
  const remove = () => removeFromWishlist(id);
  const add = () => addToCart(id);

  return (
    <div className={s.wishlist_card}>
      <button className={s.delete_button} onClick={remove}>
        X
      </button>
      <button className={s.add_button} onClick={add}>
        Add to cart
      </button>
      <Link to={`/product/${id}`}>
        <img src={image} alt="" />
        <div to={`/product/${id}`} className={s.price_info}>
          <span>{discont_price}€ </span>
          <span>{price}€ </span>
          <span>-{Discount}%</span>
        </div>
        <p>{title}</p>{" "}
      </Link>
    </div>
  );
}
