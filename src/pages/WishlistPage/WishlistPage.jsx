import s from "./WishlistPage.module.scss";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import WishlistCard from "../../components/Wishlistitem/WishlistItem";
import { getProductInfo } from "../../requests/products";

export default function WishListPage() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  console.log(wishlist);

  const [toRender, setWishlistToRender] = useState([]);

  useEffect(() => {
    setProductsToRender();
  }, [wishlist]);

  const setProductsToRender = async () => {
    const result = [];
    for (const { id, quantity } of wishlist) {
      const productData = await getProductInfo(id);
      result.push({ quantity, ...productData });
    }
    setWishlistToRender(result);
  };

  return (
    <div>
      <h2>WishList</h2>
      <div className={s.cart_container}>
        {toRender.map((e) => (
          <WishlistCard key={e.id} {...e} />
        ))}
        {!wishlist.length && <h3>No Product in the Wishlist</h3>}
      </div>
    </div>
  );
}
