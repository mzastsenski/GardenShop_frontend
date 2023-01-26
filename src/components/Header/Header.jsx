import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import { BsHandbag as BagIcon } from "react-icons/bs";
import { AiOutlineHeart as FavIcon } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";

export default function Nav() {
  const cart = useSelector((state) => state.cart.cart);
  // const wishlist = useSelector((state) => state.wishlist.wishlist);
  const cartCount = cart.reduce((prev, { quantity }) => prev + quantity, 0);

  return (
    <header>
      <nav className={s.navigation}>
        <div className={s.nav_left}>
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
          <Link to="/categories">
            <button>Catalog</button>
          </Link>
        </div>
        <div className={s.nav_right}>
          <HashLink smooth to="/#categories">Categories</HashLink>
          <HashLink smooth to="/">
            Coupon
          </HashLink>
          <HashLink smooth to="/#sale">
            Sale
          </HashLink>
          <HashLink
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
            // smooth
            to="/#contacts"
          >
            Contacts
          </HashLink>
          <Link to="/wishlist">
            <div className={s.icon_container}>
              <FavIcon size={25} />
              {/* {wishlist.length > 0 && (
                <span className={s.count}>{wishlist.length}</span>
              )} */}
            </div>
          </Link>
          <Link to="/cart">
            <div className={s.icon_container}>
              <BagIcon size={24} />
              {cartCount > 0 && <span className={s.count}>{cartCount}</span>}
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
