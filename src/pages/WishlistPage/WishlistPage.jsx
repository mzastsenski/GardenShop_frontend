import s from "./WishlistPage.module.scss";
import { useSelector } from "react-redux";
import WishlistCard from "../../components/WishlistCard/WishlistCard";

export default function WishListPage() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  // console.log(wishlist);
  return (
    <div>
      <h2>WishList</h2>
      <div className={s.cart_container}>
        {wishlist.map((e) => (
          <WishlistCard key={e.id} {...e} />
        ))}
        {!wishlist.length && <h3>No Product in the Wishlist</h3>}
      </div>
    </div>
  );
}
