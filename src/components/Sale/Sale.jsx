import s from "./Sale.module.scss";

export default function Categories() {
  return (
    <section id="sale" className={s.sale}>
      <h1>Christmas sale</h1>
      <div>
        <button>All promotions</button>
        <button>Read more</button>
      </div>
      <img src="images/sale_image.png" alt="" />
    </section>
  );
}
