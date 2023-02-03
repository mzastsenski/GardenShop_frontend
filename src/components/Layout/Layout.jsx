import Nav from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import s from "./Layout.module.scss";

export default function Layout() {
  const style = { width: window.screen.width };

  return (
    <div className={s.wrapper} style={style}>
      <Nav />
      <main className={s.outlet}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
