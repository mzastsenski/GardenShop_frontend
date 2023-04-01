import s from "./WishlistPage.module.scss";
import { useState, useEffect, useCallback } from "react";
import WishlistCard from "../../components/Wishlistitem/WishlistItem";
import { getProductInfo } from "../../requests/products";
import { useStore } from "../../store";

export default function WishListPage() {
  const {
    wishlist: { wishlist },
  } = useStore();

  const [toRender, setWishlistToRender] = useState([]);

  const setProductsToRender = useCallback(async () => {
    const promises = wishlist.map((id) => getProductInfo(id));
    const promisesResult = await Promise.all(promises);
    const result = promisesResult.map((e, i) => ({
      quantity: wishlist[i].quantity,
      ...e,
    }));
    setWishlistToRender(result);
  }, [wishlist]);

  useEffect(() => {
    setProductsToRender();
  }, [wishlist, setProductsToRender]);

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
