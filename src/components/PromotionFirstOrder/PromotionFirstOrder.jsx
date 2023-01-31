import s from "./PromotionFirstOrder.module.scss";

export default function Categories() {
  const submit = (e) => {
    e.preventDefault();
    const val = e.target.phone.value;
    const regex = /^([+](\d{1,3})\s?)?((\(\d{3,5}\)|\d{3,5})(\s)?)\d{3,8}$/;
    const result = regex.test(val);
    result ? alert(val) : alert("Enter right phone number");
  };
  return (
    <section id="promotion" className={s.promotion_first_order}>
      <img src="/images/gnom.png" alt="" />
      <div>
        <h1>Discount 5%</h1>
        <h2>for first order</h2>
        <form onSubmit={submit}>
          <input type="text" name="phone" defaultValue={"+49"} />
          <button>Take Discount</button>
        </form>
      </div>
    </section>
  );
}
