import s from "./WishlistPage.module.scss";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import WishlistCard from "../../components/Wishlistitem/WishlistItem";
import { getProductInfo } from "../../requests/products";

export default function WishListPage() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const [toRender, setWishlistToRender] = useState([]);

  useEffect(() => {
    setProductsToRender();
  }, [wishlist]);

  const setProductsToRender = async () => {
    const promises = wishlist.map((id) => getProductInfo(id));
    const promisesResult = await Promise.all(promises);
    const result = promisesResult.map((e, i) => ({
      quantity: wishlist[i].quantity,
      ...e,
    }));
    setWishlistToRender(result);
  };

  return (
    <div className={s.wishlist_page}>
      <h2>WishList</h2>
      <div className={s.products_container}>
        {toRender.map((e) => <WishlistCard key={e.id} {...e} />).reverse()}
        {!wishlist.length && <h3>No products in the wishlist</h3>}
      </div>
    </div>
  );
}
