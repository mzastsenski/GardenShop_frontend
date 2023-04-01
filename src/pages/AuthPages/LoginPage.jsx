import s from "./Auth.module.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { login_req, postLogout } from "../../requests/auth";
import { useStore } from "../../store";

export default function LoginPage() {
  const {
    user: { user, setUser },
    cart: { cart, setCart },
    wishlist: { wishlist, setWishlist },
  } = useStore();

  const [style, setStyle] = useState({
    opacity: 0.5,
  });

  useEffect(() => {
    setStyle({
      opacity: 1,
      transition: "0.4s",
    });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const pass = e.target.password.value;
    user && pass
      ? login_req({ user, pass, cart, wishlist }, setUser)
      : alert("Enter your data");
  };

  const logout = () => {
    setUser("");
    setCart([]);
    setWishlist([]);
    localStorage.setItem("user", "");
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("wishlist", JSON.stringify([]));
    postLogout();
  };

  const jsx1 = (
    <form className={s.login} onSubmit={submit}>
      <label className={s.field}>
        <input name="user" type="text" placeholder="Username"></input>
      </label>
      <label className={s.field}>
        <input
          name="password"
          onKeyPress={(e) => e.key === "Enter" && submit()}
          type="password"
          placeholder="Password"
        ></input>
      </label>
      <br />
      <div className={s.login_buttons}>
        <button type="submit">Login</button>
        <NavLink to="/">
          <button type="button">Cancel</button>
        </NavLink>
      </div>
      <NavLink to="/Signup">
        <p type="button" className={s.switch}>
          New user? Sign up
        </p>
      </NavLink>
    </form>
  );

  const jsx2 = (
    <div className={s.login}>
      <div className={s.login_info}>
        <div>
          You are logged as <span>{localStorage.getItem("user")}</span>
        </div>
      </div>
      <div className={s.login_buttons}>
        <button onClick={logout}>Logout</button>
        <NavLink to="/">
          <button>Cancel</button>
        </NavLink>
      </div>
      <div className={s.login_buttons}>
        <NavLink to="/orders">
          <button>Orders</button>
        </NavLink>
        {user === "Admin" && (
          <NavLink to="/editproducts">
            <button>Products</button>
          </NavLink>
        )}
      </div>
    </div>
  );

  return (
    <div style={style} className={s.modal}>
      <div className={s.modal_content}>{!user ? jsx1 : jsx2}</div>
    </div>
  );
}
