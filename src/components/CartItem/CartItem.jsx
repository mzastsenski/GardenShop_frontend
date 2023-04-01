import s from "./CartItem.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart as WishlistIcon,
  AiTwotoneHeart as WishlistIcon2,
  AiOutlinePlus as PlusIcon,
  AiOutlineMinus as MinusIcon,
} from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useStore } from "../../store";

export default function CartItem({
  id,
  quantity,
  discont_price,
  image,
  price,
  title,
}) {
  const {
    wishlist: { wishlist, addToWishlist, removeFromWishlist },
    cart: { incrementQuantity, decrementQuantity, deleteProduct },
  } = useStore();
  const [inWishlist, setInWishList] = useState(false);

  useEffect(() => {
    const finded = wishlist.find((e) => e === id);
    finded ? setInWishList(true) : setInWishList(false);
  }, [wishlist, id]);

  const remove = () => deleteProduct(id);
  const plus = () => incrementQuantity(id);
  const minus = () => decrementQuantity(id);
  const add_to_wishlist = () => {
    inWishlist ? removeFromWishlist(id) : addToWishlist(id);
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
