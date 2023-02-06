import s from "./WishlistItem.module.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../../store/slices/wishlistSlice";
import { addToCart } from "../../store/slices/cartSlice";

export default function WishlistCard({
  id,
  discont_price,
  image,
  price,
  title,
}) {
  const Discount = (100 - (discont_price / price) * 100).toFixed(0);
  const dispatch = useDispatch();
  const remove = () => dispatch(removeFromWishlist(id));
  const add = () => dispatch(addToCart(id));

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
          <span>{price}€ </span>
          <span>{discont_price}€ </span>
          <span>-{Discount}%</span>
        </div>
        <p>{title}</p>{" "}
      </Link>
    </div>
  );
}
