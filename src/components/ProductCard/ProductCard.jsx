import s from "./ProductCard.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart as WishlistIcon,
  AiTwotoneHeart as WishlistIcon2,
} from "react-icons/ai";
import { useStore } from "../../store";

export default function ProductCard({
  id,
  title,
  image,
  price,
  discont_price,
}) {
  const {
    cart: { addToCart },
    wishlist: { wishlist, addToWishlist, removeFromWishlist },
  } = useStore();

  const Discount = (100 - (discont_price / price) * 100).toFixed(0);
  const [inWishlist, setInWishList] = useState(false);

  useEffect(() => {
    if (wishlist && wishlist.length) {
      const finded = wishlist.find((e) => e === id);
      finded ? setInWishList(true) : setInWishList(false);
    } else setInWishList(false);
  }, [wishlist, id]);

  const saveToWishlist = () => {
    inWishlist ? removeFromWishlist(id) : addToWishlist(id);
  };

  const className =
    Discount > 0 ? s.price_info : [s.price_info, s.price_info2].join(" ");

  const size = 55;

  return (
    <div className={s.product_card}>
      <button className={s.add_button} onClick={() => addToCart(id)}>
        Add to cart
      </button>
      {!inWishlist ? (
        <WishlistIcon
          size={size}
          onClick={saveToWishlist}
          className={s.wishlist_icon}
        />
      ) : (
        <WishlistIcon2
          size={size}
          onClick={saveToWishlist}
          className={s.wishlist_icon}
        />
      )}
      <Link to={`/product/${id}`}>
        <img src={image} alt="" />
        <div className={className}>
          <span>{discont_price}€ </span>
          {Discount > 0 && <span>{price}€ </span>}
          {Discount > 0 && <span>-{Discount}%</span>}
        </div>
        <p>{title}</p>{" "}
      </Link>
    </div>
  );
}
