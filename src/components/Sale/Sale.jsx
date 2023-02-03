import s from "./Sale.module.scss";

export default function Categories() {
  return (
    <section id="sale" className={s.sale}>
      <h1>Sale</h1>
      <h2>New season</h2>
      <div>
        <button>Sale</button>
        <button>Learn more</button>
      </div>
      <img src="images/sale_image.png" alt="" />
    </section>
  );
}
