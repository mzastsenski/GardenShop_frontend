import s from "./PromotionFirstOrder.module.scss";
import { useForm } from "react-hook-form";

export default function Categories() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submit = (data) => {
    console.log(data.phone)
    reset();
  };

  const phoneRegister = register("phone", {
    pattern: {
      value: /^([+](\d{1,3})\s?)?((\(\d{3,5}\)|\d{3,5})(\s)?)\d{3,8}$/,
      message: "*Enter valid phone number",
    },
  });
  
  return (
    <section id="promotion" className={s.promotion_first_order}>
      <img src="/images/gnom.png" alt="" />
      <div>
        <h1>Discount 5%</h1>
        <h2>for first order</h2>
        <form onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            name="phone"
            defaultValue={"+49"}
            {...phoneRegister}
          />
          <button>Take Discount</button>
        </form>
        <div>{errors.phone && <p>{errors.phone?.message}</p>}</div>
      </div>
    </section>
  );
}
