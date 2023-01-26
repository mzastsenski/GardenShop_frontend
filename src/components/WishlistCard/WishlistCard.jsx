import s from "./WishlistCard.module.scss";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../store/slices/wishlistSlice";

export default function WishlistCard({
  id,
  discont_price,
  image,
  price,
  title,
}) {
  const dispatch = useDispatch();
  const remove = () => dispatch(removeFromWishlist(id));

  return (
    <div className={s.cart_card}>
      <button className={s.delete_button} onClick={remove}>
        x
      </button>
      <img src={image} alt="img" />
      <div>
        <p>{title}</p>
        <div>
          <span>{price}</span>
          <span>{discont_price}</span>
        </div>
        <button onClick={remove}>remove from Wishlist</button>
      </div>
    </div>
  );
}
