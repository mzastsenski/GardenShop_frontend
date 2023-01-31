import s from "./Auth.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp_req } from "../../requests/auth";

export default function SignupPage() {
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const pass = e.target.password.value;
    const passConf = e.target.confirm.value;

    if (!user) alert("Enter username");
    if (!pass) alert("Enter password");
    else if (pass !== passConf) alert("Passwords not equal");

    if (user && pass && passConf && pass === passConf) {
      dispatch(signUp_req({ user, pass }));
    }
  };

  return (
    <div className={s.modal}>
      <div className={s.modal_content}>
        <form className={s.signup} onSubmit={submit}>
          <label className={s.field}>
            <input name="user" type="text" placeholder="Username"></input>
          </label>
          <label className={s.field}>
            <input
              name="password"
              type="password"
              placeholder="Password"
            ></input>
          </label>
          <label className={s.field}>
            <input
              name="confirm"
              type="password"
              placeholder="Confirm password"
            ></input>
          </label>
          <br />
          <div className={s.login_buttons}>
            <button type="submit">Sign up</button>
            <NavLink to="/">
              <button type="button">Cancel</button>
            </NavLink>
          </div>
          <NavLink to="/Login">
            <p type="button" className={s.switch}>
              Already registered? Login
            </p>
          </NavLink>
        </form>
      </div>
    </div>
  );
}
