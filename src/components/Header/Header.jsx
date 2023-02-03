import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { BsHandbag as CartIcon } from "react-icons/bs";
import { AiOutlineHeart as WishlistIcon } from "react-icons/ai";
import { SlUser as UserIcon } from "react-icons/sl";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";

export default function Nav() {
  const cart = useSelector((state) => state.cart.cart);
  const cartCount = cart.reduce((prev, { quantity }) => prev + quantity, 0);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

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
          <HashLink smooth to="/#categories" className={s.hashlink}>
            Categories
          </HashLink>
          <HashLink smooth to="/#promotion" className={s.hashlink}>
            Coupon
          </HashLink>
          <HashLink smooth to="/#sale" className={s.hashlink}>
            Sale
          </HashLink>
          <HashLink
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
            to="#contacts"
            className={s.hashlink}
          >
            Contacts
          </HashLink>
          <Link to="/wishlist">
            <div className={s.icon_container}>
              <WishlistIcon size={28} />
              {wishlist.length > 0 && (
                <span className={s.count}>{wishlist.length}</span>
              )}
            </div>
          </Link>
          <Link to="/cart">
            <div className={s.icon_container}>
              <CartIcon size={27} />
              {cartCount > 0 && <span className={s.count}>{cartCount}</span>}
            </div>
          </Link>
          <Link to="/login">
            <span className={s.login_icons}>
              <UserIcon size={27} />
              {/* &nbsp;&nbsp;{user && user} */}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
