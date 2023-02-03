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
    const result = [];
    for (const id of wishlist) {
      const productData = await getProductInfo(id);
      result.push(productData);
    }
    setWishlistToRender(result);
  };

  return (
    <div className={s.wishlist_page}>
      <h2>WishList</h2>
      <div className={s.cart_container}>
        {toRender.map((e) => {
          return <WishlistCard key={e.id} {...e} />;
        })}
        {!wishlist.length && <h3>No products in the wishlist</h3>}
      </div>
    </div>
  );
}
