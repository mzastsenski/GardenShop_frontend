import s from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
} from "../../store/slices/cartSlice";
import { addToWishlist } from "../../store/slices/wishlistSlice";
export default function CartItem({
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
  const add_to_wishlist = () => dispatch(addToWishlist(id));

  return (
    <div className={s.cart_card}>
      <Link to={`/product/${id}`}>
        <img src={image} alt="img" />
      </Link>
      <div>
        <p>{title}</p>
        <div className={s.quantity_buttons}>
          <button onClick={minus}>-</button>
          <span>{quantity}</span>
          <button onClick={plus}>+</button>
        </div>
        <div>
          <span>{price}</span>
          <p>id: {id}</p>
          <span>{discont_price}</span>
        </div>
        <button onClick={add_to_wishlist}>Add to Wishlist</button>
      </div>
      <button className={s.delete_button} onClick={remove}>
        x
      </button>
    </div>
  );
}
