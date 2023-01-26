import s from "./CartCard.module.scss";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
} from "../../store/slices/cartSlice";
import { addToWishlist } from "../../store/slices/wishlistSlice";
export default function CartCard({
  id,
  quantity,
  discont_price,
  image,
  price,
  title,
}) {
  const dispatch = useDispatch();
  const remove = () => dispatch(deleteProduct(id));
  const plus = () => dispatch(incrementQuantity(id));
  const minus = () => dispatch(decrementQuantity(id));
  const addToList = () =>
    dispatch(
      addToWishlist({
        id,
        title,
        image,
        price,
        discont_price,
      })
    );

  return (
    <div className={s.cart_card}>
      <button className={s.delete_button} onClick={remove}>
        x
      </button>
      <img src={image} alt="img" />
      <div>
        <p>{title}</p>
        <div className={s.buttons}>
          <button onClick={minus}>-</button>
          <span>{quantity}</span>
          <button onClick={plus}>+</button>
        </div>
        <div>
          <span>{price}</span>
          <span>{discont_price}</span>
        </div>
        <button onClick={addToList}>Add to Wishlist</button>
      </div>
    </div>
  );
}
