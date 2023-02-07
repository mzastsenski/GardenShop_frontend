import s from "./CartItem.module.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
} from "../../store/slices/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../store/slices/wishlistSlice";
import {
  AiOutlineHeart as WishlistIcon,
  AiTwotoneHeart as WishlistIcon2,
  AiOutlinePlus as PlusIcon,
  AiOutlineMinus as MinusIcon,
} from "react-icons/ai";

import { RxCross2 } from "react-icons/rx";

export default function CartItem({
  id,
  quantity,
  discont_price,
  image,
  price,
  title,
}) {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  const [inWishlist, setInWishList] = useState(false);

  useEffect(() => {
    const finded = wishlist.find((e) => e === id);
    finded ? setInWishList(true) : setInWishList(false);
  }, [wishlist, id]);

  const remove = () => dispatch(deleteProduct(id));
  const plus = () => dispatch(incrementQuantity(id));
  const minus = () => dispatch(decrementQuantity(id));
  const add_to_wishlist = () => {
    inWishlist ? dispatch(removeFromWishlist(id)) : dispatch(addToWishlist(id));
  };

  return (
    <div className={s.cart_card}>
      <Link to={`/product/${id}`}>
        <img src={image} alt="img" />
      </Link>
      <div className={s.info}>
        <p>{title}</p>
        <div className={s.quantity_buttons}>
          <span onClick={minus} className={s.button}>
            <MinusIcon />
          </span>
          <span>{quantity}</span>
          <span onClick={plus} className={s.button}>
            <PlusIcon />
          </span>
        </div>
      </div>
      <span className={s.discont_price}>{discont_price}€</span>
      <span className={s.price}>{price}€</span>
      {!inWishlist ? (
        <WishlistIcon
          size={30}
          onClick={add_to_wishlist}
          className={s.wishlist_icon}
        />
      ) : (
        <WishlistIcon2
          size={30}
          onClick={add_to_wishlist}
          className={s.wishlist_icon}
        />
      )}
      <RxCross2 size={32} onClick={remove} className={s.delete_icon} />
    </div>
  );
}
