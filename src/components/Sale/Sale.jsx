import s from "./Sale.module.scss";
import { HashLink } from "react-router-hash-link";

export default function Categories() {
  return (
    <section id="sale" className={s.sale}>
      <h1>Sale</h1>
      <h2>New season</h2>
      <div>
        <HashLink smooth to="/#promotions">
          <button> Sale </button>
        </HashLink>
        <HashLink smooth to="/#promotions">
          <button>Learn more</button>
        </HashLink>
      </div>
      <img src="images/sale_image.png" alt="" />
    </section>
  );
}
