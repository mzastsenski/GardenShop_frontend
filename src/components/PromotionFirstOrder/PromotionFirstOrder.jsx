import s from "./PromotionFirstOrder.module.scss";

export default function Categories() {
  const submit = (e) => {
    e.preventDefault();
    console.log(e.target.phone.value);
  };
  return (
    <section id="promotion" className={s.promotion_first_order}>
      <img src="/images/gnom.png" alt="" />
      <div>
        <h1>Discount 5%</h1>
        <h2>for first order</h2>
        <form onSubmit={submit}>
          <input
            type="text"
            name="phone"
            defaultValue={"+49"}
          />
          <button>Take Discount</button>
        </form>
      </div>
    </section>
  );
}
