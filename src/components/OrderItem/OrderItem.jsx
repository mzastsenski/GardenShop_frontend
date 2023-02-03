import s from "./OrderItem.module.scss";

export default function Orderitem({ title, discont_price, quantity, image }) {
  return (
    <div className={s.order_item}>
      <p>
        <img src={image} alt="" />
      </p>
      <p>{title}</p>
      <p>{discont_price}€</p>
      <p>{quantity}</p>
      <p>{discont_price * quantity}€</p>
    </div>
  );
}
